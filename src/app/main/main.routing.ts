/**
 * Created by Jeff on 8/21/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {PrivateCollectionsComponent} from './collections/private-collections/private-collections.component';
import {UploadComponent} from './upload/upload.component';
import {Home} from '../testing/home/home';
import {LocationProfileComponent} from './location-profile/location-profile.component';
import {CommunityCollectionsComponent} from './collections/community-collections/community-collections.component';
import {SearchComponent} from './search/search.component';
import {RegulationsComponent} from './regulations/regulations.component';
import {REG_ROUTES} from './regulations/regulations.routing';
import {LandingComponent} from './landing/landing.component';

export const MAIN_ROUTES: Routes = [

  // Home Page Routes
  {path: '', redirectTo: '/main/landing', pathMatch: 'full'},
  {path: 'myprofile', component: UserProfileComponent},
  {path: 'mycollections', component: PrivateCollectionsComponent},
  {path: 'post', component: UploadComponent},
  {path: 'locationprofile', component: LocationProfileComponent},
  {path: 'collections', component: CommunityCollectionsComponent, data: {
  }},
  {path: 'search', component: SearchComponent, data: {
  } },
  {path: 'permits', component: RegulationsComponent,  children: REG_ROUTES  , data: {
  }},
    {path: 'landing', component: LandingComponent}
];
