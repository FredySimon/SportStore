import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbroComponent } from './umbro.component';

describe('UmbroComponent', () => {
  let component: UmbroComponent;
  let fixture: ComponentFixture<UmbroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmbroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmbroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
