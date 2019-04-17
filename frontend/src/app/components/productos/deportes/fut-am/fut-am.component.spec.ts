import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutAmComponent } from './fut-am.component';

describe('FutAmComponent', () => {
  let component: FutAmComponent;
  let fixture: ComponentFixture<FutAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
