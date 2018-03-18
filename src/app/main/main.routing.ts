/**
 * Created by Jeff on 8/21/2017.
 */
import {Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UploadComponent} from './upload/upload.component';
import {LocationProfileComponent} from './location-profile/location-profile.component';
import {SearchComponent} from './search/search.component';
import {PermitComponent} from './permit/permit.component';
import {InfoComponent} from "./permit/info/info.component";

export const MAIN_ROUTES: Routes = [

  // Home Page Routes
  {path: '', redirectTo: '/main/search', pathMatch: 'full'},
  {path: 'myprofile', component: UserProfileComponent},
  {path: 'post', component: UploadComponent},
  {path: 'locationprofile', component: LocationProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: 'permit', component: PermitComponent},
  {path: 'info', component: InfoComponent}

];
