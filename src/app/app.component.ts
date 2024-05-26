import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent, HtmlElementLabelComponent} from "./components";

@Component({
  selector: 'app-root',
  standalone: true,
	imports: [RouterOutlet, HeaderComponent, HtmlElementLabelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'roberto-padilla-portfilio';
}
