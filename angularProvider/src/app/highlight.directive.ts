import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.border') border: string = '5px solid red';
  constructor() { }

  @HostListener('mouseleave') onMouseLeave() {
    this.border = '5px solid blue';
  }

  @HostListener('mouseover') onMouseOver() {
    this.border = '5px solid green';
  }

}
