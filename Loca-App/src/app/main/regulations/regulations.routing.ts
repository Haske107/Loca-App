import {Routes, RouterModule} from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {RulesComponent} from "./rules/rules.component";
import {SocialServicesComponent} from "./social-services/social-services.component";
import {PermitComponent} from "./permit/permit.component";

export const REG_ROUTES: Routes = [
  // Home Page Routes
  {path: '', redirectTo: '/main/permits/rulesregulations', pathMatch: 'full'},
  {path: 'permit', component: PermitComponent},
  {path: 'socialservices', component: SocialServicesComponent},
  {path: 'rulesregulations', component: RulesComponent},
  {path: 'students', component: StudentsComponent}
];
