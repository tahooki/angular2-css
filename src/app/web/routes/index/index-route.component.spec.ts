/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndexRouteComponent } from './index-route.component';

describe('IndexRouteComponent', () => {
  let component: IndexRouteComponent;
  let fixture: ComponentFixture<IndexRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
