import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatComponent} from './chat.component';
import {AngularMaterialsModule} from "../../angular-materials.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
FormsModule
  ],
  declarations: [
      ChatComponent

  ]
})
export class ChatModule { }
