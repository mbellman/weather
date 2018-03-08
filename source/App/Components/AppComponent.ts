import PRNG from '@core/Math/PRNG';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <button (click)="randomizeNumber()">Randomize</button>: {{ number }}
  `
})
export default class AppComponent {
  public number: number;
  private _prng: PRNG = new PRNG();

  public randomizeNumber (): void {
    this.number = this._prng.random(0, 100);
  }
}
