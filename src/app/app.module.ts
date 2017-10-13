// Angular Goodies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {Routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';


// Other Goodies
import 'hammerjs';

// Modules
import {MainModule} from './main/main.module';


// Services
import {AuthService} from './services/auth.service';
import {LocationService} from './services/location.service';
import {FileService} from './services/file.service';

// Components
import {AppComponent } from './app.component';
import {LoadingComponent } from './auth/loading/loading.component';
import {AngularMaterialsModule} from './angular-materials.module';

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
        FileService,
        {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
    ],
    bootstrap: [AppComponent]
})


export class AppModule {}
