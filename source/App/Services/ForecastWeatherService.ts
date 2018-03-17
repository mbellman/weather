import AbstractWeatherService from '@services/AbstractWeatherService';
import { Final, Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface IForecastData { }

@Injectable()
export default class ForecastWeatherService extends AbstractWeatherService {
  @Final @Implements public fetchData (): Promise<IForecastData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
