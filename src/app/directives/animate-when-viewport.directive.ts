import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

type Animation =
  'appear-right-to-left'
  | 'appear-bottom-to-top'
  | 'appear-top-to-bottom'
  | 'appear-left-to-right'
  | 'fade-in';

@Directive({
  selector: '[animate-when-viewport]',
  standalone: true
})
export class AnimateWhenViewportDirective implements AfterViewInit {
  @Input() animation: Animation = 'fade-in';
  @Input() offset: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.animateInView();
  }

  @HostListener('window:scroll', [])
  animateInView() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const inView = (
      rect.bottom >= this.offset &&
      rect.right >= this.offset &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - this.offset &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) - this.offset
    );

    if (inView) {
      this.renderer.addClass(this.el.nativeElement, `animate-${this.animation}`)
      // this.el.nativeElement.classList.add();
    }
  }
}
