import { Component, OnInit } from '@angular/core';
import { ApplyCssDirective } from './apply-css.directive';
import { AddNewElementDirective } from './add-new-element.directive';

@Component({
  selector: 'app-renderer-example',
  templateUrl: './renderer-example.component.html',
  styleUrls: ['./renderer-example.component.scss']
})
export class RendererExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
