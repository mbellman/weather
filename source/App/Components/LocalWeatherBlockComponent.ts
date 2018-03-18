import { Bound, Implements } from 'trampoline-framework';
import { Component, Input, OnInit } from '@angular/core';
import { ILocalWeatherData, ILocalWeatherReport, LocalWeatherService } from '@services/LocalWeatherService';
import '@styles/LocalWeatherBlockStyles.less';

@Component({
  selector: 'local-weather-block',
  template: `
    <div class="local-weather-block">
      <i class="condition"></i>
      <span class="temperature">
        {{ temperature }}
      </span>
    </div>
  `
})
export default class LocalWeatherBlockComponent implements OnInit {
  @Input() public location: string;
  private temperature: number;

  public constructor (private localWeatherService: LocalWeatherService) { }

  @Implements public ngOnInit (): void {
    this.localWeatherService.saveLocation(this.location);
    this.localWeatherService.subscribe(this.onLocalWeatherUpdate);
  }

  @Bound private onLocalWeatherUpdate ({ reports }: ILocalWeatherData): void {
    const report = reports.filter(({ location }) => location === this.location)[0];

    if (report) {
      const { temperature } = report;

      this.temperature = temperature;
    }
  }
}
