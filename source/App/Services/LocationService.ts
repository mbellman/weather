import { Injectable } from '@angular/core';

export interface ILocation {
  x: number;
  y: number;
}

@Injectable()
export class LocationService {
  private locations: ILocation[] = [];

  public addLocation (location: ILocation): void {
    this.locations.push(location);
  }

  public removeLocation (location: ILocation): void {
    this.locations = this.locations.filter(({ x, y }) => {
      return x !== location.x && y !== location.y;
    });
  }
}
