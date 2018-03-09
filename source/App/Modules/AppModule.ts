import AppComponent from '@components/AppComponent';
import TabBarComponent from '@components/TabBarComponent';
import UIModule from '@modules/UIModule';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    UIModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export default class AppModule { }
