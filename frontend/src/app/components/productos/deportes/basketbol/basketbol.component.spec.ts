import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketbolComponent } from './basketbol.component';

describe('BasketbolComponent', () => {
  let component: BasketbolComponent;
  let fixture: ComponentFixture<BasketbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
