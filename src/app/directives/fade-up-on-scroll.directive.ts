import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appFadeUpOnScroll]',
})
export class FadeUpOnScrollDirective implements AfterViewInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animate-fade-up');
            this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
            obs.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.renderer.addClass(this.el.nativeElement, 'opacity-0');
    observer.observe(this.el.nativeElement);
  }
}
