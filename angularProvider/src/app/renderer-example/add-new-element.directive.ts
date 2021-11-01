import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddNewElement]'
})
export class AddNewElementDirective implements OnInit {

  constructor(private renderer2: Renderer2, private elementRef: ElementRef ) { }
  ngOnInit() {
    const pNode = this.renderer2.createElement('p');
    const txtNode = this.renderer2.createText('I am from directive');

    this.renderer2.appendChild(pNode, txtNode);
    this.renderer2.appendChild(this.elementRef.nativeElement,pNode);
  }

}
