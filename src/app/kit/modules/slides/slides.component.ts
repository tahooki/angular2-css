import { Component, OnInit, QueryList, ElementRef } from '@angular/core';
import { SlideItemComponent } from './slide-item/slide-item.component';
import { ContentChildren, ViewChild } from '@angular/core/src/metadata/di';
import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector:    'kit-slides',
  templateUrl: 'slides.component.html',
  styleUrls:   ['slides.component.scss']
})
export class SlidesComponent implements OnInit {
  @ContentChildren(SlideItemComponent)
  slideItems: QueryList<SlideItemComponent>;

  // 탭 스크롤 이동을 위한 변수
  @ViewChild('leftButton')
  leftButtonElement: ElementRef;

  // 탭 위치를 찾기위해 받는 tab들
  @ViewChild('rightButton')
  rightButtonElement: ElementRef;

  @HostListener('click') onClick() {
    console.log('onClick !!');
  };


  constructor() { }

  ngOnInit() {
  }

}
