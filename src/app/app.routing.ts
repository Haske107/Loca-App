import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoadingComponent} from './auth/loading/loading.component';
import {MAIN_ROUTES} from './main/main.routing';
import {LandingComponent} from "./main/landing/landing.component";

const   APP_ROUTES: Routes = [
    // Home Page Routes
    {path: '', redirectTo: '/landing', pathMatch: 'full'},
    {path: 'loading', component: LoadingComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'main', component: MainComponent, children: MAIN_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
