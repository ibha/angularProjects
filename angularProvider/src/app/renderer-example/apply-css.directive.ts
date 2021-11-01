import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplyCss]'
})
export class ApplyCssDirective implements OnInit {

  constructor(private renderer: Renderer2,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'myClass')
  }

}
