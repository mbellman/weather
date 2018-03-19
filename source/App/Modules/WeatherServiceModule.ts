import { CloudRadarWeatherService } from '@services/Weather/CloudRadarWeatherService';
import { ForecastWeatherService } from '@services/Weather/ForecastWeatherService';
import { LocalWeatherService } from '@services/Weather/LocalWeatherService';
import { NgModule, NgZone } from '@angular/core';
import { PrecipitationRadarWeatherService } from '@services/Weather/PrecipitationRadarWeatherService';

@NgModule({
  providers: [
    LocalWeatherService,
    ForecastWeatherService,
    CloudRadarWeatherService,
    PrecipitationRadarWeatherService
  ]
})
export class WeatherServiceModule { }
