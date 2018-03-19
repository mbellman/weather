import { Autowired, Callback, Final, Wired } from 'trampoline-framework';
import { WeatherModel } from '@core/simulation/WeatherModel';

@Wired
export abstract class AbstractWeatherService<TServiceData> {
  @Autowired()
  protected static readonly weatherModel: WeatherModel;

  public abstract fetchData (...args: any[]): Promise<TServiceData>;
}
