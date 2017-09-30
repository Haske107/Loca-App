import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegulationsComponent} from "./regulations.component";
import {PermitComponent} from "./permit/permit.component";
import {SocialServicesComponent} from "./social-services/social-services.component";
import {RulesComponent} from "./rules/rules.component";
import {StudentsComponent} from "./students/students.component";
import {AngularMaterialsModule} from "../../angular-materials.module";
import {Routing} from "../../app.routing";

@NgModule({
  imports: [
    CommonModule,
      AngularMaterialsModule,
      Routing,

  ],
  declarations: [
      RegulationsComponent,
      PermitComponent,
      SocialServicesComponent,
      RulesComponent,
      StudentsComponent
  ]
})
export class RegulationsModule { }
