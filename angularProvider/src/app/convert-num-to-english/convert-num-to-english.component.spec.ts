import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertNumToEnglishComponent } from './convert-num-to-english.component';

describe('ConvertNumToEnglishComponent', () => {
  let component: ConvertNumToEnglishComponent;
  let fixture: ComponentFixture<ConvertNumToEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertNumToEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertNumToEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
