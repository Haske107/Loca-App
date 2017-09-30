import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationProfileComponent} from './location-profile.component';
import {AngularMaterialsModule} from "../../angular-materials.module";

@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,

  ],
  declarations: [
      LocationProfileComponent
  ]
})
export class LocationProfileModule { }
