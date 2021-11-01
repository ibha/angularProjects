import {Component, HostBinding, HostListener, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild("ref")
  labelRef!: ElementRef;
  name = "Ibha";

  ngOnInit(): void {
    this.name="Ibha"
  }

  onSubmit(templateForm: any):void {
    this.labelRef.nativeElement.innerHTML = this.name;
    console.log("Submitted", templateForm);
  }

}
