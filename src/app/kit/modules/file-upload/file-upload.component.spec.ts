import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { THKFileUploadComponent } from './file-upload.component';

describe('THKFileUploadComponent', () => {
  let component: THKFileUploadComponent;
  let fixture: ComponentFixture<THKFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ THKFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(THKFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
