import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thk-slide',
  templateUrl: './slide.component.html',
  styleUrls: [
    './slide.component.scss',
    '../lib/css/swiper.css'
  ],
  host: {'class': 'swiper-slide'}
})
export class THKSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
