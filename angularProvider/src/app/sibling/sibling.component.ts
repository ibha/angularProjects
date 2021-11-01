import { Component, OnInit } from '@angular/core';
import { LoggerServiceService } from '../logger-service.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  loggerService: LoggerServiceService
  constructor(loggerService: LoggerServiceService) {
    this.loggerService = loggerService;
  }

  ngOnInit(): void {
    this.loggerService.getLog();
    this.loggerService.setLog("SiblingComponent");
    this.loggerService.getLog();
  }

}
