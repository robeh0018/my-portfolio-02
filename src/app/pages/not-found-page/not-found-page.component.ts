import {Component, inject} from '@angular/core';
import {MainLayoutComponent} from "../../layout";
import {SectionsImgComponent} from "../../components";
import {Router} from "@angular/router";


@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    MainLayoutComponent,
    SectionsImgComponent
  ],
  template: `
    <app-main-layout>
      <div class="min-h-dvh flex flex-col gap-5 items-center justify-between lg:flex-row pt-32 md:pt-[5rem]">

        <section class="flex flex-col gap-10">
          <div>
            <h1 class="font-extrabold">Oops !...</h1>
            <span class="h5">Page no found</span>
          </div>

          <p>The page you are looking for does not exist go back to home.</p>

          <button
            (click)="navigateToPreviousRoute()"
            class="button-primary">GO BACK
          </button>
        </section>

        <app-sections-img
          imgPath="assets/images/undraw_page_not_found_re_e9o6.svg"
        />

      </div>
    </app-main-layout>

  `,
  styles: ``,
})
export default class NotFoundPageComponent {

  private router = inject(Router);

  async navigateToPreviousRoute() {
    await this.router.navigate(['home']);
  }
}
