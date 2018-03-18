import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent} from './user-profile.component';
import {AngularMaterialsModule} from "../../angular-materials.module";

@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,

  ],
  declarations: [
      UserProfileComponent,
  ]
})
export class UserProfileModule { }
