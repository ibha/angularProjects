import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-resolver',
  templateUrl: './route-resolver.component.html',
  styleUrls: ['./route-resolver.component.scss']
})
export class RouteResolverComponent implements OnInit {
  items: string = "default";
  constructor() { }

  ngOnInit(): void {
  }

}
