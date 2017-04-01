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

  onChangeFile(fileList) {
    console.log('onfileChange',fileList);
    let firstFile = fileList[0];
    this._setSomenailImage(firstFile);
  }

  onFileDrop(fileList) {
    console.log('onFileDrop',fileList);
    let firstFile = fileList[0];
    this._setSomenailImage(firstFile);
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
