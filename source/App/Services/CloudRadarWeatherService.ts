import AbstractRadarWeatherService from '@services/AbstractRadarWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

interface ICloudRadarData { }

@Injectable()
export default class CloudRadarWeatherService extends AbstractRadarWeatherService<ICloudRadarData> {
  @Implements public fetchRadarData (): Promise<ICloudRadarData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
