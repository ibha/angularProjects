import { Injectable, InjectionToken } from '@angular/core';

export const LoggerServiceService = new InjectionToken<string>('LoggerServiceService');

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService {
  logStr: string = "Experimental logComponent";
  constructor() {

  }
  getLog () {
    console.log(this.logStr);
  }

  setLog(str: string) {
    this.logStr = str;
  }
}
