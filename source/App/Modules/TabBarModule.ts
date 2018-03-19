import { BrowserModule } from '@angular/platform-browser';
import { LocalWeatherComponent } from '@components/LocalWeatherComponent';
import { NgModule } from '@angular/core';
import { TabBarComponent } from '@components/TabBarComponent';
import { TabOptionComponent } from '@components/TabOptionComponent';

@NgModule({
  imports: [ BrowserModule ],
  exports: [ TabBarComponent ],
  declarations: [
    TabBarComponent,
    TabOptionComponent,
    LocalWeatherComponent
  ]
})
export class TabBarModule { }
