import { Component } from '@angular/core';
import { ITabOption } from '@app/Types';
import '@styles/TabBarStyles.less';

@Component({
  selector: 'tab-bar',
  template: `
    <nav class="tab-bar">
      <tab-option
        *ngFor="let tabOption of tabOptions; index as index"
        [selected]="index === selectedTabIndex"
        [text]="tabOption.text"
        (click)="onClickTab(index)"
      ></tab-option>
    </nav>
  `
})
export default class TabBarComponent {
  private selectedTabIndex: number = 0;

  private readonly tabOptions: ITabOption[] = [
    { text: 'Real-Time Map' },
    { text: 'Forecast' },
    { text: 'Reports' },
    { text: 'Cities' }
  ];

  private onClickTab (index: number): void {
    this.selectedTabIndex = index;
  }
}
