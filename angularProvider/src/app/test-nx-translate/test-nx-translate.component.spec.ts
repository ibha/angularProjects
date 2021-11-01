import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNxTranslateComponent } from './test-nx-translate.component';

describe('TestNxTranslateComponent', () => {
  let component: TestNxTranslateComponent;
  let fixture: ComponentFixture<TestNxTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNxTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNxTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
