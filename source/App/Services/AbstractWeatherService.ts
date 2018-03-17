import WeatherModel from '@core/Simulation/WeatherModel';
import { Callback, Final } from 'trampoline-framework';
import { Injectable } from '@angular/core';

@Injectable()
export default abstract class AbstractWeatherService<TServiceData> {
  protected static weatherModel: WeatherModel = new WeatherModel();
  protected weatherModel: WeatherModel = AbstractWeatherService.weatherModel;

  public abstract fetchData (...args: any[]): Promise<TServiceData>;

  @Final public subscribe (subscriber: Callback<TServiceData>): void {
    this.weatherModel.subscribe(
      this.getWeatherModelUpdateCallbackForSubscriber(subscriber)
    );
  }

  private getWeatherModelUpdateCallbackForSubscriber (subscriber: Callback<TServiceData>): Callback<any> {
    return async () => {
      const data = await this.fetchData();

      subscriber(data);
    };
  }
}
