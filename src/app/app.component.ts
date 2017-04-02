import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('appBody') appBody: ElementRef;
  @ViewChild('appContent') appContent: ElementRef;

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
    this._setLayoutCenter();
  }

  private _setLayoutCenter() {
    let isOverWidth = window.innerWidth > this.APP_WIDTH;
    let isOverHeight = window.innerHeight > this.APP_HEIGHT;

    let widthCenter = ((window.innerWidth / 2) - (this.APP_WIDTH / 2));
    let heightCenter = ((window.innerHeight / 2) - (this.APP_HEIGHT / 2));

    let app_left = isOverWidth ? widthCenter : 0;
    let app_top  = isOverHeight ? heightCenter : 0;

    this.appBody.nativeElement.style.top = app_top + 'px';
    this.appBody.nativeElement.style.left = app_left + 'px';
  }

  private _initLayout() {
    this.appBody.nativeElement.style.width = this.APP_WIDTH + 'px';
    this.appBody.nativeElement.style.height = this.APP_HEIGHT + 'px';

    let header: any   = document.getElementsByClassName('header')[0];
    let contentHeight = this.APP_HEIGHT - header.clientHeight;

    this.appContent.nativeElement.style.height = contentHeight + 'px';
  }
}
