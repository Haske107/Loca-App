import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoadingComponent} from './auth/loading/loading.component';
import {MAIN_ROUTES} from './main/main.routing';

const   APP_ROUTES: Routes = [
    // Home Page Routes
    {path: '', redirectTo: '/main/search', pathMatch: 'full'},
    {path: 'loading', component: LoadingComponent},
    {path: 'main', component: MainComponent, children: MAIN_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
