import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
)
export class APIResolverService {

  items: any[] = [
    { description: 'Item 1' },
    { description: 'Item 2' },
    { description: 'Item 3' },
  ];

  constructor() { }
  resolve(route: ActivatedRouteSnapshot) {
  /*  return getItems(route.params.date).pipe(
      catchError((error) => {
      return empty();
      });*/
  }

 /* getItems: Observable<any[]> {
    const observable = Observable.create(observer: any => {
      observer.next(this.items)
    });
    return observable;
  }*/
}
