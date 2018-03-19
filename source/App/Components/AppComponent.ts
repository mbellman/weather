import { Component } from '@angular/core';
import '@styles/AppStyles.less';

@Component({
  selector: 'app',
  template: `
    <div class="app">
      <tab-bar></tab-bar>
      <map></map>
    </div>
  `
})
export class AppComponent { }
