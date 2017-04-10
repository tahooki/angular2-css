import { Component, OnInit, Input } from '@angular/core';
import './lib/js/swiper.min.js';
import { SwiperOption } from './model/parameter.model';

declare let Swiper: any;

// http://idangero.us/swiper/
// MIT Licensed, v3.4.2 released on March 10, 2017
@Component({
  selector:    'thk-swiper',
  templateUrl: './swiper.component.html',
  styleUrls:   [
    './swiper.component.css',
    './lib/css/swiper.css'
  ]
})
export class THKSwiperComponent implements OnInit {
  @Input()
  swiperClass: string = null; // 해당 컴포넌트 사용

  swiper: any;

  constructor() {
  }

  ngOnInit() {
    let swiperOption: SwiperOption = {
      direction: 'horizontal',
      loop:      true
    }
    let swiperContainerClass = this.swiperClass ? this.swiperClass : '.swiper-container';

    this.swiper = new Swiper(swiperContainerClass, swiperOption);
  }
}
