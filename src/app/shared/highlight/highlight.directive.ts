import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightClassList = 'bg-sky-400/50';

  hover: boolean = false;
  highlightElement!: HTMLElement;

  @HostListener('mouseenter', ['$event.target']) onMouseover(target: HTMLElement) {
    if (this.parentElement.nativeElement !== target) {
      return;
    }

    this.hover = true;
    this.renderer.appendChild(target, this.highlightElement);
  }

  @HostListener('mouseleave', ['$event.target']) onMouseout(target: HTMLElement) {
    if (this.parentElement.nativeElement !== target) {
      return;
    }

    this.hover = false;
    this.renderer.removeChild(target, this.highlightElement);
  }

  @HostBinding('class.highlighted') get highlightClass() {
    return this.hover;
  }

  constructor(private parentElement: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const element: HTMLDivElement = this.renderer.createElement('div');
    const classList = (
      'absolute w-full h-full top-0 left-0 pointer-events-none' +
      ' ' +
      this.highlightClassList
    ).split(' ');

    classList.forEach((className) => this.renderer.addClass(element, className));
    this.renderer.addClass(this.parentElement.nativeElement, 'relative');

    this.highlightElement = element;
  }
}
