import { Injectable } from '@angular/core';

export class LoggerServiceService {
  logStr: string = "logComponent";
  constructor() {

  }
  getLog () {
    console.log(this.logStr);
  }

  setLog(str: string) {
    this.logStr = str;
  }
}
