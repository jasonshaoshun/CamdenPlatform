import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TelemetryService } from './telemetry.service';

describe('TelemetryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [TelemetryService]
    });
  });

  it('should be created', inject([TelemetryService], (service: TelemetryService) => {
    expect(service).toBeTruthy();
  }));

  it('should get non empty result', inject([TelemetryService], (service: TelemetryService) => { 
    service.getTelemetries({}) 
      .subscribe(telemetries => expect(telemetries.length).toBeGreaterThan(0)); 
  })); 
});
