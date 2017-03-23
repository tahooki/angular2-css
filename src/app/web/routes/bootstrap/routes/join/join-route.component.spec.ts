/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoinRouteComponent } from './join-route.component';

describe('JoinRouteComponent', () => {
  let component: JoinRouteComponent;
  let fixture: ComponentFixture<JoinRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
