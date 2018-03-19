import { Bound, Implements } from 'trampoline-framework';
import { Component, Input, NgZone } from '@angular/core';
import { ILocalWeatherReport, LocalWeatherService } from '@services/weather/LocalWeatherService';
import { Zoned } from '@app/resources/decorators';
import { ILocation, LocationService } from '@services/LocationService';
import '@styles/LocalWeatherStyles.less';

@Component({
  selector: 'local-weather',
  template: `
    <div class="local-weather">
      <span *ngIf="activeReport">
        <i class="condition"></i>
        <span class="temperature">
          {{ report.temperature }}
        </span>
      </span>
      <span *ngIf="!activeReport">
        Loading...
      </span>
    </div>
  `
})
export class LocalWeatherComponent {
  private reports: ILocalWeatherReport[] = [];
  private selectedReportIndex: number = 0;

  private get activeReport (): ILocalWeatherReport {
    return this.reports[this.selectedReportIndex];
  }

  public constructor (
    private localWeatherService: LocalWeatherService,
    private locationService: LocationService
  ) { }
}
