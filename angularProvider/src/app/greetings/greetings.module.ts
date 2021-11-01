import { Component, Inject, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceConfigService } from './user-service-config.service';

export const GOOD_MORNING = new InjectionToken<string>('String for a morning greeting');
 
@Component({
  selector: 'app-good-morning',
  template: '{{ goodMorning }}',
})
export class GoodMorningComponent {
  constructor(@Inject(GOOD_MORNING) public goodMorning: string) {}
}

@NgModule({
  declarations: [GoodMorningComponent],
  providers: [UserServiceConfigService,
    { provide: GOOD_MORNING, useValue: 'Good morning!' },],
  imports: [
    CommonModule
  ],
  exports: [GoodMorningComponent],
})
export class GreetingsModule {
    static forRoot(config: UserServiceConfigService): ModuleWithProviders<GreetingsModule> 
      { return { 
          ngModule: GreetingsModule, 
          providers: [{provide: typeof UserServiceConfigService, useValue: config }]
        }; 
      }

      static withConfig(goodMorning: string): ModuleWithProviders<GreetingsModule> {
        return {
            ngModule: GreetingsModule,
            providers: [
              { provide: GOOD_MORNING, useValue: goodMorning },
            ]
        };
 }
}
