import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Widget } from './widget';


@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  public serverUrl = "http://localhost:3000/sensorTypes/sensorTypes";
  
  constructor(private http: HttpClient) { }

  getWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.serverUrl)
    .pipe(
      tap(() => console.log(`fetched widgets`)),
      catchError(this.handleError('getWidgets', []))
    );
  }

  getWidget(sensorId: string): Observable<Widget> {
    var requestUrl = "http://localhost:3000/sensorTypes/sensorType/" + sensorId;
    return this.http.get<Widget>(requestUrl)
    .pipe(
      tap(_ => console.log(`fetched widget id=${sensorId}`)),
      catchError(this.handleError<Widget>(`getWidget id=${sensorId}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); // log to console instead
 
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
