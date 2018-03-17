import TabBarComponent from '@components/TabBarComponent';
import TabOptionComponent from '@components/TabOptionComponent';
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
    TabOptionComponent
  ]
})
export default class TabBarModule { }
