import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadButtonComponent } from './file-upload-button/file-upload-button.component';
import { FileConverterDashboardComponent } from './file-converter-dashboard/file-converter-dashboard.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WlCoreModule } from '../core/wl-core.module';
import { KnobComponent } from './knob/knob.component';
import { MyTrackSearchComponent } from './my-track-search/my-track-search.component';
import { TrackModifierComponent } from './track-modifier/track-modifier.component';
import { BrowserModule } from '@angular/platform-browser';
import { FileConverterRoutingModule } from './file-converter-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { UserModule } from '../user/user.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TrackListItemComponent } from './track-list-item/track-list-item.component';



@NgModule({
  declarations: [
    FileUploadButtonComponent,
    FileConverterDashboardComponent,
    KnobComponent, MyTrackSearchComponent,
    TrackModifierComponent, TopBarComponent, BottomBarComponent, TrackListItemComponent],
  imports: [
    BrowserModule,
    CommonModule,
    WlCoreModule,
    MatProgressSpinnerModule,
    FileConverterRoutingModule,
    UserModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FileConverterModule { }
