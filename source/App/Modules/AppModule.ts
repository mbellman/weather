import { AppComponent } from '@components/AppComponent';
import { BrowserModule } from '@angular/platform-browser';
import { LocationService } from '@services/LocationService';
import { MapModule } from '@modules/MapModule';
import { NgModule } from '@angular/core';
import { TabBarComponent } from '@components/TabBarComponent';
import { TabBarModule } from '@modules/TabBarModule';
import { WeatherServiceModule } from '@modules/WeatherServiceModule';

@NgModule({
  imports: [
    WeatherServiceModule,
    TabBarModule,
    MapModule
  ],
  declarations: [ AppComponent ],
  providers: [ LocationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
