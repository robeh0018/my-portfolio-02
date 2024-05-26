import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-html-element-label',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './html-element-label.component.html',
  styleUrl: './html-element-label.component.scss'
})
export class HtmlElementLabelComponent {
  @Input({required: true}) label!: string;
  @Input() isIndented: boolean = false;
}
