import LocalWeatherBlockComponent from '@components/LocalWeatherBlockComponent';
import TabBarComponent from '@components/TabBarComponent';
import TabOptionComponent from '@components/TabOptionComponent';
import WeatherServiceModule from '@modules/WeatherServiceModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    TabBarComponent
  ],
  declarations: [
    TabBarComponent,
    TabOptionComponent,
    LocalWeatherBlockComponent
  ]
})
export default class TabBarModule { }
