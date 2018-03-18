import AbstractWeatherService from '@services/AbstractWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

export interface IForecastData { }

@Injectable()
export class ForecastWeatherService extends AbstractWeatherService<IForecastData> {
  @Implements public fetchData (): Promise<IForecastData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
