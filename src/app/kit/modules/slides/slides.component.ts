import { Component, OnInit, QueryList, ElementRef } from '@angular/core';
import { SlideItemComponent } from './slide-item/slide-item.component';
import { ContentChildren, ViewChild } from '@angular/core/src/metadata/di';
import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector:    'thk-slides',
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

  isMouseDown = false;

  @HostListener('touchstart',['$event']) onTouchstart(e: any) {
    console.log('onTouchstart !! ', e);
  };

  @HostListener('touchmove',['$event']) onTouchmove(e: any) {
    console.log('onTouchmove !! ', e);
  };

  @HostListener('touchend',['$event']) onTouchend(e: any) {
    console.log('onTouchend !! ', e);
  };

  @HostListener('mousedown',['$event']) onMousedown(e: any) {
    console.log('onMousedown !! ', e);
    this.isMouseDown = true;
  };

  @HostListener('mousemove',['$event']) onMousemove(e: any) {
    if(this.isMouseDown) {
      console.log('onMousemove !! ', e);
    }
  };

  @HostListener('mouseup',['$event']) onMouseup(e: any) {
    console.log('onMouseup !! ', e);
    this.isMouseDown = false;
  };

  @HostListener('window:resize', ['$event']) onResize(e:any) {
    console.log('onResize !! ', e.target.innerWidth);

  };

  constructor() { }

  ngOnInit() {
  }

}
