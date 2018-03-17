import AbstractWeatherService from '@services/AbstractWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface ICurrentWeatherData {
  location: string;
}

@Injectable()
export default class CurrentWeatherService extends AbstractWeatherService<ICurrentWeatherData> {
  @Implements public fetchData (location: string): Promise<ICurrentWeatherData> {
    return new Promise((resolve, reject) => {
      resolve({ location });
    });
  }
}
