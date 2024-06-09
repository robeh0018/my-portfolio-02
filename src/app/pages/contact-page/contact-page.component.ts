import {Component, inject, Signal} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {NgIcon} from "@ng-icons/core";
import {MyInfo} from "../../interfaces";
import {MyInfoService} from "../../services";


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgIcon,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export default class ContactPageComponent {
  me: Signal<MyInfo | undefined>;

  private myInfoService = inject(MyInfoService);

  constructor() {
    this.me = this.myInfoService.getAll();
  }
}
