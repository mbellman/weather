import WeatherModel from '@core/Simulation/WeatherModel';
import { Autowired, Callback, Final, Wired } from 'trampoline-framework';

@Wired
export default abstract class AbstractWeatherService<TServiceData> {
  protected weatherModel: WeatherModel = AbstractWeatherService.weatherModel;
  @Autowired() private static weatherModel: WeatherModel;

  public abstract fetchData (...args: any[]): Promise<TServiceData>;

  @Final public subscribe (subscriber: Callback<TServiceData>): void {
    const dataSubscriber = this.createDataSubscriber(subscriber);

    this.weatherModel.subscribe(dataSubscriber);
  }

  private createDataSubscriber (subscriber: Callback<TServiceData>): Callback<any> {
    return async () => {
      const data = await this.fetchData();

      subscriber(data);
    };
  }
}
