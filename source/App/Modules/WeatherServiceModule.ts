import { CloudRadarWeatherService } from '@services/CloudRadarWeatherService';
import { ForecastWeatherService } from '@services/ForecastWeatherService';
import { LocalWeatherService } from '@services/LocalWeatherService';
import { NgModule, NgZone } from '@angular/core';
import { PrecipitationRadarWeatherService } from '@services/PrecipitationRadarWeatherService';

@NgModule({
  providers: [
    LocalWeatherService,
    ForecastWeatherService,
    CloudRadarWeatherService,
    PrecipitationRadarWeatherService
  ]
})
export default class WeatherServiceModule { }
