import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { saveAs } from 'file-saver';
import { IUploadedFile } from '../IUploadedFile';
import { TrackControllerService } from '../track-controller.service';

@Component({
  selector: 'wl-file-upload-button',
  templateUrl: './file-upload-button.component.html',
  styleUrls: ['./file-upload-button.component.scss']
})
export class FileUploadButtonComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private trackController: TrackControllerService) {

  }
  public showSpinner = false;

  ngOnInit(): void {
  }

  uploadFile($event: { target: { files: any[]; }; }): void {
    let file;
    if ($event){
      file = ($event.target.files[0] as IUploadedFile);
    }else{
      file = ((document.getElementById('uploader') as any).files[0] as IUploadedFile);
    }
    this.showSpinner = true;
    if (file.type !== 'audio/x-wav'){
      // TODO SM: alerting code to be added.
      window.alert('Invalid file type.');
    }
    else{
      this.trackController.originalFile = file;

      let headers = new HttpHeaders({
        'accept': 'application/json'
      });
      const formData = new FormData()
      formData.append('user_id', '1')
      formData.append('file', file);
      headers = headers.append('file-name', this.trackController.originalFile.name);

      this.apiService.uploadToServer(formData, headers)
        .subscribe(
          success => this.handleUploadSuccess(this.trackController.originalFile.name, success),
          error => this.handleUploadError(this.trackController.originalFile.name, error)
        );
    }
  }

  private handleUploadSuccess(fileName: string, data: any): void {

    console.log(`Response received for fileName ${fileName}.`);
    let headers = new HttpHeaders();
    headers = headers.append('file-path', data['file-path']);
    this.apiService.downloadFromServer(headers).subscribe(
      success => this.handleDownloadSuccess(this.trackController.originalFile.name, success),
      error => this.handleDownloadError(this.trackController.originalFile.name, error)
    );
  }

  private handleUploadError(fileName: string, data: any): void {
    console.error(`An error occurred processing the file ${fileName}.`);
    this.showSpinner = false;
  }

  private handleDownloadSuccess(fileName: string, data: any): void {
    console.log(`Successfully downloaded ${fileName}, response: ${data}`);
    fileName = data.headers.get('file-name');
    // headerFileName = data.
    const blob = new Blob([data.body], {type: 'audio/x-wav'});
    saveAs(blob, fileName);
    this.showSpinner = false;
  }

  private handleDownloadError(fileName: string, data: any): void {
    console.error(`An error occurred downloading file ${fileName}`);
    console.log(data);
    this.showSpinner = false;
  }
}
