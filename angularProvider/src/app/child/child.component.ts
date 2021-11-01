import { Component, Input, OnInit } from '@angular/core';
import { LoggerServiceService } from '../logger-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  loggerService: LoggerServiceService;
  @Input("name") name:string = "name";
  constructor(loggerService: LoggerServiceService) {
    this.loggerService = loggerService;
  }

  ngOnInit(): void {
    console.log("on init called");
    this.loggerService.getLog();
    this.loggerService.setLog("ChildComponent");
    this.loggerService.getLog();
  }

  ngOnChanges(): void {
    console.log("on changes called");
  }

  ngDoCheck(): void {
    console.log("do check called");
  }

}
