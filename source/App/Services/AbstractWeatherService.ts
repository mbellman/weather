import WeatherModel from '@core/Simulation/WeatherModel';
import { Autowired, Bound, Callback, Final, Wired } from 'trampoline-framework';
import { NgZone, Injectable, Inject } from '@angular/core';

@Wired
export default abstract class AbstractWeatherService<TServiceData> {
  protected readonly weatherModel: WeatherModel = AbstractWeatherService.weatherModel;

  @Autowired()
  private static readonly weatherModel: WeatherModel;

  public constructor (@Autowired({ enableLongStackTrace: false }) private ngZone: NgZone) { }

  public abstract fetchData (...args: any[]): Promise<TServiceData>;

  @Final public subscribe (subscriber: Callback<TServiceData>): void {
    const dataSubscriber = this.createDataUpdateSubscriber(subscriber);

    this.weatherModel.subscribe(dataSubscriber);
  }

  private createDataUpdateSubscriber (subscriber: Callback<TServiceData>): Callback<any> {
    return async () => {
      const data = await this.fetchData();

      this.ngZone.run(() => subscriber(data));
    };
  }
}
