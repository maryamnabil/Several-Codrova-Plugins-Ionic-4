import { Component, OnInit } from '@angular/core';
// we must include them for working with ng2-file-upload
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss'],
})
export class MultiFileUploadComponent implements OnInit {
  // we create an object of uploader to keep track of files
  public uploader: FileUploader = new FileUploader({});
  // this is boolean used fot knowing if a file is on the droppable zone or not
  public hasBaseDropZoneOver = false;

  constructor() { }

  ngOnInit() {}

  // returns array of final files in the queue
  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  // When file is on the droppable area the ev is true else it's false
  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }

  // when the reorder events is fired this function works
  reorderFiles(reorderEvent: CustomEvent): void {
    console.log(reorderEvent);
    // the element is the one I want to move we access it using splice method
    const element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
    // ordering it in the queue using splice method of the array
    this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
  }

}


