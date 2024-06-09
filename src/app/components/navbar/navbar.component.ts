import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MainLayoutComponent} from "../../layout";
import {NgClass} from "@angular/common";
import {NgIcon} from "@ng-icons/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MainLayoutComponent,
    RouterLinkActive,
    NgClass,
    NgIcon
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  navBarItems: WritableSignal<string[]> = signal<string[]>([]);
  isNavbarCollapsed: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    this.navBarItems.set(['Home', 'About', 'Skills', 'Projects', 'Contact'])
    //   'Experience'. 'Education'
  }

  toggleNavbarCollapsed(): void {
    this.isNavbarCollapsed.set(!this.isNavbarCollapsed());
  }

  async closeNavbar() {
    this.isNavbarCollapsed.set(false);
  }
}
