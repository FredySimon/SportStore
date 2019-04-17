import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverlastComponent } from './everlast.component';

describe('EverlastComponent', () => {
  let component: EverlastComponent;
  let fixture: ComponentFixture<EverlastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverlastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
