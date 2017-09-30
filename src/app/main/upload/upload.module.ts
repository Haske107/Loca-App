import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadComponent} from './upload.component';
import {AngularMaterialsModule} from '../../angular-materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routing} from '../../app.routing';
import {FillOutDetailsComponent} from './fill-out-details/fill-out-details.component';
import {ReviewAndSubmitComponent} from './review-and-submit/review-and-submit.component';
import {UploadPhotosComponent} from './upload-photos/upload-photos.component';
import {VerifyLocationComponent} from './verify-location/verify-location.component';

@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
      FormsModule,
      ReactiveFormsModule,
      Routing

  ],
  declarations: [
      UploadComponent,
      FillOutDetailsComponent,
      ReviewAndSubmitComponent,
      UploadPhotosComponent,
      VerifyLocationComponent
  ]
})
export class UploadModule { }
