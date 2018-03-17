import AbstractWeatherService from '@services/AbstractWeatherService';
import IRadarWeatherService from '@services/IRadarWeatherService';
import { Final, Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface IPrecipitationRadarData { }

@Injectable()
export default class PrecipitationRadarWeatherService extends AbstractWeatherService implements IRadarWeatherService {
  @Final @Implements public fetchRadarData (): Promise<IPrecipitationRadarData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  @Final @Implements public fetchData (): Promise<IPrecipitationRadarData> {
    return this.fetchRadarData();
  }
}
