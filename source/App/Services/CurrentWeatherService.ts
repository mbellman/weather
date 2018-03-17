import AbstractWeatherService from '@services/AbstractWeatherService';
import { Final, Implements, Callback } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface ICurrentWeatherData {
  location: string;
}

@Injectable()
export default class CurrentWeatherService extends AbstractWeatherService {
  @Final @Implements public fetchData (location: string): Promise<ICurrentWeatherData> {
    return new Promise((resolve, reject) => {
      resolve({ location });
    });
  }
}
