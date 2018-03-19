import { CloudRadarWeatherService } from '@services/weather/CloudRadarWeatherService';
import { ForecastWeatherService } from '@services/weather/ForecastWeatherService';
import { LocalWeatherService } from '@services/weather/LocalWeatherService';
import { NgModule, NgZone } from '@angular/core';
import { PrecipitationRadarWeatherService } from '@services/weather/PrecipitationRadarWeatherService';

@NgModule({
  providers: [
    LocalWeatherService,
    ForecastWeatherService,
    CloudRadarWeatherService,
    PrecipitationRadarWeatherService
  ]
})
export class WeatherServiceModule { }
