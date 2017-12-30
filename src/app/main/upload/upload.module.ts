import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload.component';
import {AngularMaterialsModule} from '../../angular-materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routing} from '../../app.routing';
import {FillOutDetailsComponent} from './fill-out-details/fill-out-details.component';
import {ReviewAndSubmitComponent} from './review-and-submit/review-and-submit.component';
import {UploadPhotosComponent} from './upload-photos/upload-photos.component';
import {VerifyLocationComponent} from './verify-location/verify-location.component';
import {LocationRulesComponent} from './location-rules/location-rules.component';
import {AgmCoreModule} from '@agm/core';
import {UploadService} from './upload.service';
import {MatExpansionModule} from '@angular/material';
import {FileDropModule} from "ngx-file-drop";
import {DragulaModule} from "ng2-dragula";


@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
      FormsModule,
      ReactiveFormsModule,
      Routing,
      MatExpansionModule,
      FileDropModule,
      DragulaModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI'
      })
  ],
  declarations: [
      UploadComponent,
      FillOutDetailsComponent,
      ReviewAndSubmitComponent,
      UploadPhotosComponent,
      VerifyLocationComponent,
      LocationRulesComponent,
  ],
    providers: [
        UploadService
    ]
})
export class UploadModule { }
