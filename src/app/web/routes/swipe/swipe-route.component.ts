import { Component, OnInit } from '@angular/core';
import './lib/js/swiper.js';
declare let Swiper: any;

@Component({
  selector: 'SWIPE',
  templateUrl: './swipe-route.component.html',
  styleUrls: [
    './swipe-route.component.scss',
    './lib/css/swiper.css'
  ]
})
export class SwipeRouteComponent implements OnInit {
  swipe: any;

  constructor() { }

  ngOnInit() {
    this.swipe = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      // And if we need scrollbar
      scrollbar: '.swiper-scrollbar',
    });

  }

}
