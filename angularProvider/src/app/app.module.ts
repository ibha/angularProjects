import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';
import { LoggerServiceService } from "./logger-service.service";
import { InfiniteScrollListComponent } from './infinite-scroll-list/infinite-scroll-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HighlightDirective } from './highlight.directive';
import { NxTranslateComponent } from './nx-translate/nx-translate.component';
import {TestNxTranslateComponent} from "./test-nx-translate/test-nx-translate.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PromiseTestComponent } from './promise-test/promise-test.component';
import { RouteResolverComponent } from './route-resolver/route-resolver.component';
import { APIResolverService } from './route-resolver/resolver';
import { ViewContentComponent } from './viewContent/viewContent.component';
import { RendererExampleComponent } from './renderer-example/renderer-example.component';
import { ApplyCssDirective } from './renderer-example/apply-css.directive';
import { AddNewElementDirective } from './renderer-example/add-new-element.directive';
import { InnerHtmlBindingComponent } from './inner-html-binding/inner-html-binding.component';
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { ConvertNumToEnglishComponent } from './convert-num-to-english/convert-num-to-english.component';
import { CellComponent } from './tic-tac-toe/cell/cell.component';
import { GreetingsModule } from './greetings/greetings.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ParentComponent,
  },
  {
    path: 'infiniteScroll',
    component: InfiniteScrollListComponent,
  },
  {
    path: 'templateForm',
    component: TemplateFormComponent,
  },
  {
    path: 'nxTranslate',
    component: TestNxTranslateComponent,
  },
  {
    path: 'promiseTest',
    component: PromiseTestComponent,
  },
  {
    path: 'viewContent',
    component: ViewContentComponent
  },
  {
    path: 'ticTacToe',
    component: TicTacToeComponent
  },
  {
    path:'convertToWord',
    component:ConvertNumToEnglishComponent
  },
  {
    path: 'renderer',
    component: RendererExampleComponent
  },
  {
    path: 'routeResolve',
    component: RouteResolverComponent,
    resolve: {items: APIResolverService}
  },
  {
    path: '**',
    component: ParentComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SiblingComponent,
    ParentComponent,
    InfiniteScrollListComponent,
    TemplateFormComponent,
    HighlightDirective,
    NxTranslateComponent,
    TestNxTranslateComponent,
    PromiseTestComponent,
    RouteResolverComponent,
    ViewContentComponent,
    RendererExampleComponent,
    ApplyCssDirective,
    AddNewElementDirective,
    InnerHtmlBindingComponent,
    BypassSecurityComponent,
    TicTacToeComponent,
    ConvertNumToEnglishComponent,
    CellComponent
  ],
  imports: [
    BrowserModule, 
    GreetingsModule.withConfig('¡Buenos días!'),
    RouterModule.forRoot(routes), 
    HttpClientModule, 
    FormsModule, 
    ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [LoggerServiceService, APIResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
