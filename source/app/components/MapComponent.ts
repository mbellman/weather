import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Implements } from 'trampoline-framework';
import '@styles/MapStyles.less';

@Component({
  selector: 'map',
  template: `
    <canvas class="map" #canvas></canvas>
  `
})
export class MapComponent implements AfterViewInit {
  @ViewChild('canvas') private canvas: ElementRef;

  @Implements public ngAfterViewInit (): void {
    const { nativeElement } = this.canvas;

    nativeElement.width = nativeElement.clientWidth;
    nativeElement.height = nativeElement.clientHeight;
  }
}
