/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { THKSlideComponent } from './slide.component';

describe('THKSlideComponent', () => {
  let component: THKSlideComponent;
  let fixture: ComponentFixture<THKSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ THKSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(THKSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
