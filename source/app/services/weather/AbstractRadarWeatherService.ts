import { AbstractWeatherService } from '@services/weather/AbstractWeatherService';
import { Final, Implements } from 'trampoline-framework';

export interface IRadarData { }

export abstract class AbstractRadarWeatherService<TServiceData extends IRadarData> extends AbstractWeatherService<TServiceData> {
  public abstract fetchRadarData (): Promise<TServiceData>;

  @Final @Implements public fetchData (): Promise<TServiceData> {
    return this.fetchRadarData();
  }
}
