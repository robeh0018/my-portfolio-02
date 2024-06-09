import {Component} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [],
  template: `
    <main class="px-5 md:px-20 lg:px-40 overflow-x-hidden">
      <ng-content/>
    </main>
  `,
  styles: ``
})
export class MainLayoutComponent {

}
