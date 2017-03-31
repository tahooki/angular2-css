import {OnInit, Directive, HostListener, Output, EventEmitter, Input} from '@angular/core';

@Directive({
  selector: '[thk-file-drop]'
})
export class THKFileDropDirective implements OnInit {
  @Input() accept: any;

  @Output()
  isFileOver: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  fileDrop: EventEmitter<FileList> = new EventEmitter<FileList>();

  ngOnInit(): void {
    console.log('file accept', this.accept);
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any) {
    let dataTransfer = this._getDataTransfer(event);

    if (!this._hasFiles(dataTransfer.types)) {
      return;
    }

    dataTransfer.dropEffect = 'copy';
    event.preventDefault();
    this.isFileOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave() {
    this.isFileOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    let dataTransfer = this._getDataTransfer(event);

    if (!this._hasFiles(dataTransfer.types)) {
      return;
    }

    event.preventDefault();

    let files = this._filterFiles(dataTransfer.files);

    event.preventDefault();
    this.isFileOver.emit(false);
    this.fileDrop.emit(files);
  }

  private _filterFiles(files: FileList): any {
    if (!this.accept || this.accept.length === 0) {
      return files;
    }

    let acceptedFiles: File[] = [];
    for(let i = 0; i < files.length; i++) {
      for (let j = 0; j < this.accept.length; j++) {
        if (this._matchRule(this.accept[j], files[i].type)) {
          acceptedFiles.push(files[i]);
          break;
        }
      }
    }

    return acceptedFiles;
  }

  private _matchRule(rule: string, candidate: string) {
    return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
  }

  private _getDataTransfer(event: any): DataTransfer {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _hasFiles(types: any):boolean {
    if (!types) {
      return false;
    }

    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    }

    if (types.contains) {
      return types.contains('Files');
    }

    return false;
  }


}
