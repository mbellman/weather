import CloudRadarWeatherService from '@services/CloudRadarWeatherService';
import CurrentWeatherService from '@services/CurrentWeatherService';
import ForecastWeatherService from '@services/ForecastWeatherService';
import PrecipitationRadarWeatherService from '@services/PrecipitationRadarWeatherService';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    CurrentWeatherService,
    ForecastWeatherService,
    CloudRadarWeatherService,
    PrecipitationRadarWeatherService
  ]
})
export default class WeatherServiceModule { }
