import { Component, OnInit, HostBinding } from '@angular/core';
import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector:    'thk-slide-item',
  templateUrl: 'slide-item.component.html',
  styleUrls:   ['slide-item.component.scss']
})
export class SlideItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //
  // @HostBinding('style.left') setLeft(x: number) {
  //   return x;
  // }
  //
  // @HostBinding('style.width') setWidth(x: number) {
  //   return x;
  // }

}
