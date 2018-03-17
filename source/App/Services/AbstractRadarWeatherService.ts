import AbstractWeatherService from '@services/AbstractWeatherService';
import { Final, Implements } from 'trampoline-framework';

export default abstract class AbstractRadarWeatherService<TServiceData> extends AbstractWeatherService<TServiceData> {
  public abstract fetchRadarData (): Promise<TServiceData>;

  @Final @Implements public fetchData (): Promise<TServiceData> {
    return this.fetchRadarData();
  }
}
