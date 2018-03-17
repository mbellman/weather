import WeatherModel from '@core/Simulation/WeatherModel';
import { Injectable } from '@angular/core';
import { Callback } from 'trampoline-framework';

@Injectable()
export default abstract class AbstractWeatherService {
  protected static weatherModel: WeatherModel = new WeatherModel();
  protected weatherModel: WeatherModel = AbstractWeatherService.weatherModel;

  public abstract fetchData (...args: any[]): Promise<any>;

  public subscribe (subscriber: Callback<any>): void {
    this.weatherModel.subscribe(
      this.getFetchedDataCallbackForSubscriber(subscriber)
    );
  }

  private getFetchedDataCallbackForSubscriber (subscriber: Callback<any>): Callback<any> {
    return async () => {
      const data = this.fetchData();

      subscriber(data);
    };
  }
}
