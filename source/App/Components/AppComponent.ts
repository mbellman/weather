import { Component } from '@angular/core';
import '@styles/AppStyles.less';
import CurrentWeatherService from '@app/Services/CurrentWeatherService';

@Component({
  selector: 'app',
  template: `
    <div class="app">
      <tab-bar></tab-bar>
    </div>
  `
})
export default class AppComponent { }
