import { AbstractWeatherService } from '@services/Weather/AbstractWeatherService';
import { Final, Implements } from 'trampoline-framework';

export interface IRadarData { }

export abstract class AbstractRadarWeatherService<TServiceData extends IRadarData> extends AbstractWeatherService<TServiceData> {
  public abstract fetchRadarData (): Promise<TServiceData>;

  @Final @Implements public fetchData (): Promise<TServiceData> {
    return this.fetchRadarData();
  }
}
