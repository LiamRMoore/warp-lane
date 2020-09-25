import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadButtonComponent } from './file-upload-button/file-upload-button.component';
import { FileConverterDashboardComponent } from './file-converter-dashboard/file-converter-dashboard.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WlCoreModule } from '../core/wl-core.module';



@NgModule({
  declarations: [FileUploadButtonComponent, FileConverterDashboardComponent],
  imports: [
    CommonModule,
    WlCoreModule,
    MatProgressSpinnerModule
  ]
})
export class FileConverterModule { }
