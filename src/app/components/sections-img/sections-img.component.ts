import {Component, input, InputSignal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-sections-img',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template: `
    <img
      style="view-transition-name: section-img"
      alt="dev_productivity"
      class="aspect-square"
      height="400"
      width="600"
      [ngSrc]="imgPath()"
      priority>
  `,
  styles: ``
})
export class SectionsImgComponent {
  imgPath: InputSignal<string> = input.required<string>();
}
