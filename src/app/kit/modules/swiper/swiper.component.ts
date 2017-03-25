import { Component, OnInit } from '@angular/core';
import './lib/js/swiper.min.js';
declare let Swiper: any;

// http://idangero.us/swiper/
// MIT Licensed, v3.4.2 released on March 10, 2017
@Component({
  selector: 'thk-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: [
    './swiper.component.css',
    './lib/css/swiper.css'
  ]
})
export class THKSwiperComponent implements OnInit {
  swiper: any;

  constructor() { }

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      // pagination: '.swiper-pagination',

      // Navigation arrows
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',

      // And if we need scrollbar
      // scrollbar: '.swiper-scrollbar'
    });
  }
}
