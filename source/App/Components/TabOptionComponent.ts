import { Component, Input } from '@angular/core';
import { ITabOption } from '@app/Types';
import '@styles/TabOptionStyles.less';

@Component({
  selector: 'tab-option',
  template: `
    <div class="tab-option" [class.selected]="selected">
      <span>{{ text }}</span>
    </div>
  `
})
export default class TabOptionComponent {
  @Input() public selected: boolean;
  @Input() public text: string;
}
