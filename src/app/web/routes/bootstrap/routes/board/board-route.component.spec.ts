/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardRouteComponent } from './board-route.component';

describe('BoardRouteComponent', () => {
  let component: BoardRouteComponent;
  let fixture: ComponentFixture<BoardRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
