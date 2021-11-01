import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererExampleComponent } from './renderer-example.component';

describe('RendererExampleComponent', () => {
  let component: RendererExampleComponent;
  let fixture: ComponentFixture<RendererExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendererExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
