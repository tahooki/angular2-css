import { Component, OnInit } from '@angular/core';
import { THKFileHandler } from '../../../kit/util/file-handler';

@Component({
  selector: 'app-upload-route',
  templateUrl: './upload-route.component.html',
  styleUrls: ['./upload-route.component.scss']
})
export class UploadRouteComponent implements OnInit {

  imageSrc: string = '';

  constructor() { }

  ngOnInit() {
  }

  onChangeFile(e) {
    console.log('onfileChange',e);
    this._setSomenailImage(e[0]);

  }

  onFileDrop(e) {
    console.log('onFileDrop',e);

    this._setSomenailImage(e[0]);
  }

  private _setSomenailImage(file: any){
    if(THKFileHandler.checkImageFile(file)) {
      THKFileHandler.getPromiseImageSource(file).then(imageSource => {
        console.log('imageSource', imageSource);
        this.imageSrc = imageSource;
      });
    }
  }
}
