// Angular Goodies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
import {LandingComponent} from "./main/landing/landing.component";
import {PageStateService} from "./services/page.state.service";

@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
        LandingComponent

    ],
  entryComponents: [
  ],
    imports: [
        BrowserAnimationsModule,
        AngularMaterialsModule,
        MainModule,
        BrowserModule,
        Routing,
        HttpClientModule,
         ],
    providers:  [
        AuthService,
        LocationService,
        FileService,
        PageStateService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {}
