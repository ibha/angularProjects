import { Component } from '@angular/core';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';

import {
  distinct,
  filter,
  map,
  debounceTime,
  tap,
  mergeMap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import {Person} from "./person.struct";
@Component({
  selector: 'infinite-scroll-list',
  template: `
  <div>Demo Infinite scroll</div>
    <table>
    <tbody>
      <tr *ngFor="let item of pageToLoad$|async" [style.height]="itemHeight + 'px'">
        <td >{{item['name']}}</td>
      </tr>
    </tbody>
   </table>
  `,
})
export class InfiniteScrollListComponent {
  private cache: any[] = [];
  private pageByManual$ = new BehaviorSubject(1);
  itemHeight = 40;
  private numberOfItems = 10;
  private pageByScroll$ = fromEvent(window, 'scroll').pipe(
    map(() => {
      console.log('entered page by scroll');
      console.log('window.scrollY', window.scrollY);
      return window.scrollY;
    }),
    filter((current) => {
      console.log('current', current);
      console.log('document.body.clientHeight', document.body.clientHeight);
      console.log('window.innerHeight', window.innerHeight);
      return current >= document.body.clientHeight - window.innerHeight;
    }),
    debounceTime(200),
    distinct(),
    map((y) => {
      console.log('y', y);
      console.log('this.itemHeight', this.itemHeight);
      console.log('this.numberOfItems', this.numberOfItems);
      return Math.ceil(
        (y + window.innerHeight) / (this.itemHeight * this.numberOfItems)
      );
    })
  );

/*  private pageByResize$ = fromEvent(window, 'resize').pipe(
    debounceTime(200),
    map((_) => {
      console.log('Entered pageResize');
      return Math.ceil(
        (window.innerHeight + document.body.scrollTop) /
        (this.itemHeight * this.numberOfItems)
      )}
    )
  );*/

   pageToLoad$:Observable<any[]> = merge(
    this.pageByManual$,
    this.pageByScroll$,
  //  this.pageByResize$
  ).pipe(
    distinct(),
    mergeMap((page: number) => {
      console.log('entered flatmap');
      return this.httpClient
        .get(`https://swapi.dev/api/people?page=${page}`)
        .pipe(
          map((resp: any) => resp.results),
          tap((resp) => {
            console.log('page', page);
            console.log('this.cache', this.cache);
            console.log('resp', resp);
            this.cache[page - 1] = resp;
            console.log('this.itemHeight',this.itemHeight * this.numberOfItems * page);
            console.log('window.innerHeight',window.innerHeight);
            if (
              this.itemHeight * this.numberOfItems * page <
              window.innerHeight
            ) {
              console.log('Entered if in itemresults');
              this.pageByManual$.next(page + 1);
            }
          })
        );
    }),
    map(() => _.flatMap(this.cache))
  /*  ,
    filter((page) => {
      console.log('Entered pagetoload');
      return this.cache[page - 1] === undefined;
    }) */
  );

  loading = false;

/*  itemResults$: Observable<Object[]> = this.pageToLoad$.pipe(
    tap((_) => (this.loading = true)),
    mergeMap((page: number) => {
      console.log('entered flatmap');
      return this.httpClient
        .get(`https://swapi.dev/api/people?page=${page}`)
        .pipe(
          map((resp: any) => resp.results),
          tap((resp) => {
            console.log('page', page);
            console.log('this.cache', this.cache);
            console.log('resp', resp);
            this.cache[page - 1] = resp;
            console.log('this.itemHeight',this.itemHeight * this.numberOfItems * page);
            console.log('window.innerHeight',window.innerHeight);
            if (
              this.itemHeight * this.numberOfItems * page <
              window.innerHeight
            ) {
              console.log('Entered if in itemresults');
               this.pageByManual$.next(page + 1);
            }
          })
        );
    }),
    map(() => _.flatMap(this.cache))
  );*/

  constructor(private httpClient: HttpClient) {}
}
