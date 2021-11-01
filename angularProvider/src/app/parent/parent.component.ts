import { Component, OnInit } from '@angular/core';
import {LoggerServiceService} from "../logger-service.service";
import {from, fromEvent, of, Subject} from "rxjs";
import {every, filter, map, shareReplay, tap} from "rxjs/operators";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [LoggerServiceService]
})
export class ParentComponent implements OnInit {

  loggerService: LoggerServiceService;
  name:string="Ibha";
  constructor(loggerService: LoggerServiceService) {
    this.loggerService = loggerService;
  }

  ngOnInit(): void {
    this.loggerService.getLog();
    this.loggerService.setLog("ParentComponent");
    this.loggerService.getLog();
    // irrelevant, just to send values
    const s = new Subject();

    setTimeout((()=>this.name="Gandhi"),3000);
// make the observable cache the last value
    const o = s.pipe(shareReplay(1)); // <<<

// now, before subscription, values start coming in
    s.next(1);
    s.next(2);
    s.next(3);

    o.subscribe(n =>
      console.log('!!!', n)
    );
    of([4,5,6]).subscribe(data =>
      console.log(data)
    )
    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(
      //is every value even?
      every(val => val % 2 === 0)
    );
    example.subscribe(data => console.log(data));
    fromEvent<MouseEvent>(document,'click')
      .pipe(
        tap(data =>console.log("Before Filtering")), //tap can be used to keep tab on things like you can log the data but not change it
        filter(data=> data.clientX>300 && data.clientY>300), //Filter is used to filtr some items in this case the clicks to lower south east clicks
        map(data => `x: ${data.clientX} y:${data.clientY}`  ) // map is to change the data into something else
      )
      .subscribe(()=>console.log("Clicked"))
  }


}
