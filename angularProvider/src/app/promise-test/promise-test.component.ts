import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.css']
})
export class PromiseTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.callMe();
    console.log("I am four");
  }

  dos = (num: number) => {
    return new Promise((resolve, reject) => {

      setTimeout(()=>{
        if (num>3) {
          return resolve("I am two");
        } else {
          return reject("I am failed");
        }
        },3000)
    })
  }

  callMe =  () => {
    console.log("I am one");
    this.dos(4).then((text) => {
      console.log(text);
    }).catch((text)=>text)

    this.dos(2).then((text) => {
      console.log(text);
    }).catch((text)=>console.log(text))

    console.log("I am three");
  }



}
