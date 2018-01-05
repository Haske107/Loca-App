import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationProfileComponent} from './location-profile.component';
import {AngularMaterialsModule} from "../../angular-materials.module";
import { CityMapComponent } from './city-map/city-map.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  imports: [
      CommonModule,
      AngularMaterialsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBi7vTAnGqlbgX3x3N6-YV9S2BPR4PtreI'
      })
  ],
  declarations: [
      LocationProfileComponent,
      CityMapComponent
  ]
})
export class LocationProfileModule { }
