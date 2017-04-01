import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['app.component.scss']
})
export class AppComponent implements OnInit {

  appStyle: any        = {};
  appContentStyle: any = {};

  APP_WIDTH  = 375;
  APP_HEIGHT = 667;


  ngOnInit() {
    this._initLayout();
    this._setLayoutCenter();

    window.addEventListener('resize', ()=> {
      this.onResize();
    });
  }

  onResize() {
    console.log('onResize');
    this._setLayoutCenter();
  }

  private _setLayoutCenter() {
    let isOverWidth = window.innerWidth > this.APP_WIDTH;
    let isOverHeight = window.innerHeight > this.APP_HEIGHT;

    let widthCenter = ((window.innerWidth / 2) - (this.APP_WIDTH / 2));
    let heightCenter = ((window.innerHeight / 2) - (this.APP_HEIGHT / 2));

    let app_left = isOverWidth ? widthCenter : 0;
    let app_top  = isOverHeight ? heightCenter : 0;

    this.appStyle.top  = app_top + 'px';
    this.appStyle.left = app_left + 'px';
  }

  private _initLayout() {
    this.appStyle = {
      width:  this.APP_WIDTH + 'px',
      height: this.APP_HEIGHT + 'px',
    }

    let header: any   = document.getElementsByClassName('header')[0];
    let contentHeight = window.innerWidth - header.innerHeight;

    this.appContentStyle = {
      height: contentHeight
    }
  }
}
