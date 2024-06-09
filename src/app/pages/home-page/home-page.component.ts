import {Component, inject, Signal} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {RouterLink} from "@angular/router";
import {SectionsImgComponent} from "../../components";
import {MyInfoService} from "../../services";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    RouterLink,
    SectionsImgComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {
  shorterName: Signal<string>;

  private myInfoService = inject(MyInfoService);

  constructor() {
    this.shorterName = this.myInfoService.getShorterName();
  }
}
