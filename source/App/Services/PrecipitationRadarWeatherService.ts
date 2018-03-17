import AbstractRadarWeatherService from '@services/AbstractRadarWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface IPrecipitationRadarData { }

@Injectable()
export default class PrecipitationRadarWeatherService extends AbstractRadarWeatherService<IPrecipitationRadarData> {
  @Implements public fetchRadarData (): Promise<IPrecipitationRadarData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
