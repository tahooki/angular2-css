import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'thk-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class THKFileUploadComponent implements OnInit {
  @ViewChild('input')
  input: ElementRef;

  onFileUploadFinish: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  onChangeFile(files) {
    this.uploadFiles(files);
  }

  private uploadFiles(files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      let reader = new FileReader();
      reader.addEventListener('load', (event: any) => {

        this.uploadSingleFile(file);

      }, false);


      reader.readAsDataURL(file);
    }
  }

  private uploadSingleFile(file) {
    this.onFileUploadFinish.emit(file);
  }
}
