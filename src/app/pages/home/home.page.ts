import { Component, ViewChild } from '@angular/core';
// include the MultiFile component we created here
import { MultiFileUploadComponent } from '../../components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // View child is to access Html elements to use methods in TS , like here in the component we have ng2FileSelect
  // we access the component methods here
  @ViewChild(MultiFileUploadComponent, {static: false}) fileField: MultiFileUploadComponent;
  constructor() {}
  // Convert the files in the array to Form data because most back ends server make use of "Form Data"

  upload() {

    const files = this.fileField.getFiles();
    console.log(files);

    const formData = new FormData();
    formData.append('somekey', 'some value'); // Add any other data you want to send

    files.forEach((file) => {
      formData.append('files[]', file.rawFile, file.name);
    });

    // POST formData to Server

  }

}
