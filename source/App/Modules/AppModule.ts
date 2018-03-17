import AppComponent from '@components/AppComponent';
import TabBarComponent from '@components/TabBarComponent';
import TabBarModule from '@modules/TabBarModule';
import WeatherServiceModule from '@modules/WeatherServiceModule';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    WeatherServiceModule,
    TabBarModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export default class AppModule { }
