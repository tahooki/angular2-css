/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CopycatComponent } from './copycat.component';

describe('CopycatComponent', () => {
  let component: CopycatComponent;
  let fixture: ComponentFixture<CopycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
