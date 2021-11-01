import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxTranslateComponent } from './nx-translate.component';

describe('NxTranslateComponent', () => {
  let component: NxTranslateComponent;
  let fixture: ComponentFixture<NxTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
