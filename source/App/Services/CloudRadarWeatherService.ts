import AbstractWeatherService from '@services/AbstractWeatherService';
import IRadarWeatherService from '@services/IRadarWeatherService';
import { Final, Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface ICloudRadarData { }

@Injectable()
export default class CloudRadarWeatherService extends AbstractWeatherService implements IRadarWeatherService {
  @Final @Implements public fetchRadarData (): Promise<ICloudRadarData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  @Final @Implements public fetchData (): Promise<ICloudRadarData> {
    return this.fetchRadarData();
  }
}
