// Angular Goodies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Other Goodies
import 'hammerjs';
import {AgmCoreModule} from '@agm/core';
import {BsDropdownModule} from 'ngx-bootstrap';
import {NouisliderModule} from 'ng2-nouislider/src/nouislider';


// Modules
import {MainModule} from './main/main.module';


// Services
import {AuthService} from './services/auth.service';
import {LocationService} from './services/location.service';
import {FileService} from './services/file.service';

// Components
import {AppComponent } from './app.component';
import {LoadingComponent } from './auth/loading/loading.component';
import {AngularMaterialsModule} from "./angular-materials.module";

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
    ],
  entryComponents: [
  ],
    imports: [
        BrowserAnimationsModule,
        AngularMaterialsModule,
        MainModule,
        BrowserModule,
        Routing,
        HttpModule,
         ],
    providers:  [
        AuthService,
        LocationService,
        FileService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {}
