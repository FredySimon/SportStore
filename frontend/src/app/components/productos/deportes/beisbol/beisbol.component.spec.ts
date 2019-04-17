import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeisbolComponent } from './beisbol.component';

describe('BeisbolComponent', () => {
  let component: BeisbolComponent;
  let fixture: ComponentFixture<BeisbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeisbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeisbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
