import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/core/entity.service';
import { ITrackDetails } from '../ITrackDetails';
import { IUploadedFile } from '../IUploadedFile';
import { TrackControllerService } from '../track-controller.service';

@Component({
  selector: 'wl-my-track-search',
  templateUrl: './my-track-search.component.html',
  styleUrls: ['./my-track-search.component.sass']
})
export class MyTrackSearchComponent implements OnInit {

  constructor(private trackController: TrackControllerService,
    private entityService: EntityService) { }

  public trackList: (ITrackDetails)[] = [];

  ngOnInit(): void {
    this.entityService.clear();
  }

  trackSelect(track: any){
    this.trackController.selectedTrack = track;
  }

  uploadFile = (event: { dataTransfer: { files: any[]; }; }): void => {
    for(const file of <IUploadedFile[]>event.dataTransfer.files){
      // const file = <IUploadedFile>event.dataTransfer.files[0];
      //this.showSpinner = true;
      if (file.type !== 'audio/x-wav'){
        // TODO SM: alerting code to be added.
        window.alert('Invalid file type.');
      }
      else{
        this.trackController.originalFile = file;
        this.trackList.push({name: this.trackController.originalFile.name})
      }
//
    //  let headers = new HttpHeaders();
    //  headers = headers.append('file-name', this.trackController.originalFile.name);
    //  this.apiService.uploadToServer(this.trackController.originalFile, headers)
    //    .subscribe(
    //      success => this.handleUploadSuccess(this.trackController.originalFile.name, success),
    //      error => this.handleUploadError(this.trackController.originalFile.name, error)
    //    );
    //}
    }
  }
}