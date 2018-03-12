import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import {MainComponent} from './main.component';
import {UserProfileModule} from './user-profile/user-profile.module';
import {SearchModule} from './search/search.module';
import {UploadModule} from './upload/upload.module';
import {CollectionsModule} from './collections/collections.module';
import {ChatModule} from './chat/chat.module';
import {LocationProfileModule} from './location-profile/location-profile.module';
import {Routing} from '../app.routing';
import {BsDropdownModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialsModule} from '../angular-materials.module';
import {MainToolbarComponent} from "./main-toolbar/main-toolbar.component";
import { PermitComponent } from './permit/permit.component';

// MODULES
@NgModule({
  imports: [
      CommonModule,
      UserProfileModule,
      SearchModule,
      UploadModule,
      CollectionsModule,
      ChatModule,
      LocationProfileModule,
      BrowserModule,
      Routing,
      HttpClientModule,
      HttpModule,
      AngularMaterialsModule,
      BsDropdownModule.forRoot()
  ],
  declarations: [
      MainComponent,
      MainToolbarComponent,
      PermitComponent,
  ]
})
export class MainModule { }
