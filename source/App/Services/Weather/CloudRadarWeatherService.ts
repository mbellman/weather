import { AbstractRadarWeatherService } from '@services/Weather/AbstractRadarWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

export interface ICloudRadarData { }

@Injectable()
export class CloudRadarWeatherService extends AbstractRadarWeatherService<ICloudRadarData> {
  @Implements public fetchRadarData (): Promise<ICloudRadarData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
