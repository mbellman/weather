import { AbstractWeatherService } from '@services/weather/AbstractWeatherService';
import { ILocation } from '@services/LocationService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

export enum WeatherCondition {
  SUNNY,
  CLOUDY,
  FOGGY,
  RAINY,
  SNOWY
}

export interface ILocalWeatherReport {
  location: ILocation;
  temperature: number;
  condition: WeatherCondition;
}

@Injectable()
export class LocalWeatherService extends AbstractWeatherService<ILocalWeatherReport> {
  @Implements public fetchData (location: ILocation): Promise<ILocalWeatherReport> {
    const { temperature } = LocalWeatherService.weatherModel;

    return new Promise(resolve => {
      resolve({
        location,
        temperature,
        condition: WeatherCondition.SUNNY
      });
    });
  }
}
