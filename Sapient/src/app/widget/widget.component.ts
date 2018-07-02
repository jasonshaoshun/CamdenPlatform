import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WidgetService }  from '../widget.service';
import { Widget } from '../widget'
import { TelemetryService }  from '../telemetry.service';
import { Telemetry } from '../telemetry';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})

export class WidgetComponent implements OnInit {
  @Input() widget: Widget;
  telemetries: Telemetry[];

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService,
    private telemetryService: TelemetryService,
    private location: Location) {}

  ngOnInit() {
    this.getWidget();
  }

  getWidget(): void {
    const sensorId = this.route.snapshot.paramMap.get('sensorId');
    this.widgetService.getWidget(sensorId)
      .subscribe(widget => {this.widget = widget; this.getTelemetries();});
  }

  getTelemetries(): void{
    const telemetryQuery = {
      sensorType : this.widget.sensorType
    }

    this.telemetryService.getTelemetries(telemetryQuery)
      .subscribe(telemetries => this.telemetries = telemetries);
  }

  goBack(): void {
    this.location.back();
  }
}
