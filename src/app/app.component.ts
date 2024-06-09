import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components";
import {provideIcons} from "@ng-icons/core";
import {ionicIcons} from "./data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({
    ...ionicIcons
  })],
})
export class AppComponent {
  title = 'roberto-padilla-portfolio';
}
