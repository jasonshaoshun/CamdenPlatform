import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [WidgetService]
    });
  });

  it('should be created', inject([WidgetService], (service: WidgetService) => {
    expect(service).toBeTruthy();
  }));

  it('should get non empty result', inject([WidgetService], (service: WidgetService) => { 
    service.getWidgets() 
      .subscribe(widgets => expect(widgets.length).toBeGreaterThan(0)); 
  })); 
});
