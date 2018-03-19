import { AbstractRadarWeatherService } from '@services/weather/AbstractRadarWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable } from '@angular/core';

export interface IPrecipitationRadarData { }

@Injectable()
export class PrecipitationRadarWeatherService extends AbstractRadarWeatherService<IPrecipitationRadarData> {
  @Implements public fetchRadarData (): Promise<IPrecipitationRadarData> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
