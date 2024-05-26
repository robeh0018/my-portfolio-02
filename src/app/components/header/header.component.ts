import { Component } from '@angular/core';
import {HtmlElementLabelComponent} from "../html-element-label/html-element-label.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HtmlElementLabelComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  handleContactMe() {
    console.log('Contact me')
  }
}
