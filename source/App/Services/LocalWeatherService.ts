import AbstractWeatherService from '@services/AbstractWeatherService';
import { Implements } from 'trampoline-framework';
import { Injectable, NgZone } from '@angular/core';

export enum WeatherCondition {
  SUNNY,
  CLOUDY,
  FOGGY,
  RAINY,
  SNOWY
}

export interface ILocalWeatherReport {
  location: string;
  temperature: number;
  condition: WeatherCondition;
}

export interface ILocalWeatherData {
  reports: ILocalWeatherReport[];
}

@Injectable()
export class LocalWeatherService extends AbstractWeatherService<ILocalWeatherData> {
  private savedLocations: string[] = [];

  @Implements public fetchData (): Promise<ILocalWeatherData> {
    return Promise.all(
      this.savedLocations.map(savedLocation => this.fetchReport(savedLocation))
    ).then(reports => ({ reports }));
  }

  public fetchReport (location: string): Promise<ILocalWeatherReport> {
    const { temperature } = this.weatherModel;

    return new Promise(resolve => {
      resolve({
        temperature,
        location,
        condition: WeatherCondition.SUNNY
      });
    });
  }

  public removeLocation (location: string): void {
    this.savedLocations = this.savedLocations.filter(savedLocation => savedLocation !== location);
  }

  public saveLocation (location: string): void {
    this.savedLocations.push(location);
  }
}
