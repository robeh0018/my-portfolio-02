import {Component, inject, Signal} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {SectionsImgComponent} from "../../components";
import {MyInfo} from "../../interfaces";
import {MyInfoService} from "../../services";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    SectionsImgComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export default class AboutPageComponent {
  me: Signal<MyInfo | undefined>;

  private mtInfoService = inject(MyInfoService);

  constructor() {
    this.me = this.mtInfoService.getAll();
  }
}
