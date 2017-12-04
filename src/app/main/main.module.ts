import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import {MainComponent} from './main.component';
import {Home} from '../testing/home/home';
import {UserProfileModule} from './user-profile/user-profile.module';
import {SearchModule} from './search/search.module';
import {UploadModule} from './upload/upload.module';
import {CollectionsModule} from './collections/collections.module';
import {RegulationsModule} from './regulations/regulations.module';
import {ChatModule} from './chat/chat.module';
import {LocationProfileModule} from './location-profile/location-profile.module';
import {Routing} from '../app.routing';
import {BsDropdownModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialsModule} from '../angular-materials.module';
import { LandingComponent } from './landing/landing.component';

// MODULES
@NgModule({
  imports: [
      CommonModule,
      UserProfileModule,
      SearchModule,
      UploadModule,
      CollectionsModule,
      RegulationsModule,
      ChatModule,
      LocationProfileModule,
      BrowserModule,
      Routing,
      HttpClientModule,
      HttpModule,
      AngularMaterialsModule,
      BsDropdownModule.forRoot(),

  ],
  declarations: [
      MainComponent
  ]
})
export class MainModule { }
