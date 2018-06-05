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
import {MatExpansionModule, MatRadioModule, } from '@angular/material';
import {FileDropModule} from "ngx-file-drop";
import {DndModule} from "ng2-dnd";
import { AmenitiesComponent } from './amenities/amenities.component';


@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
      FormsModule,
      ReactiveFormsModule,
      Routing,
      MatExpansionModule,
      MatRadioModule,
      FileDropModule,
      DndModule.forRoot(),
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
      AmenitiesComponent,
  ],
    providers: [
        UploadService
    ]
})
export class UploadModule { }
