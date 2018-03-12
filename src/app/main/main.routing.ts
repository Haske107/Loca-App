/**
 * Created by Jeff on 8/21/2017.
 */
import {Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {PrivateCollectionsComponent} from './collections/private-collections/private-collections.component';
import {UploadComponent} from './upload/upload.component';
import {LocationProfileComponent} from './location-profile/location-profile.component';
import {CommunityCollectionsComponent} from './collections/community-collections/community-collections.component';
import {SearchComponent} from './search/search.component';
import {PermitComponent} from './permit/permit.component';

export const MAIN_ROUTES: Routes = [

  // Home Page Routes
  {path: '', redirectTo: '/main/search', pathMatch: 'full'},
  {path: 'myprofile', component: UserProfileComponent},
  {path: 'mycollections', component: PrivateCollectionsComponent},
  {path: 'post', component: UploadComponent},
  {path: 'locationprofile', component: LocationProfileComponent},
  {path: 'collections', component: CommunityCollectionsComponent, data: {
  }},
  {path: 'search', component: SearchComponent, data: {
  } },
  {path: 'permit', component: PermitComponent}
];
