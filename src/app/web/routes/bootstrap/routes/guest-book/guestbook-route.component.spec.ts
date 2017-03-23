/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestbookRouteComponent } from './guestbook-route.component';

describe('GuestbookRouteComponent', () => {
  let component: GuestbookRouteComponent;
  let fixture: ComponentFixture<GuestbookRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
