import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nx-translate',
  templateUrl: './nx-translate.component.html',
  styleUrls: ['./nx-translate.component.css']
})
export class NxTranslateComponent implements OnInit {
  lang:string = 'en';
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  onChange(value: string) {
    console.log(value);
    localStorage.setItem('lang',value);
    window.location.reload();
  }

}
