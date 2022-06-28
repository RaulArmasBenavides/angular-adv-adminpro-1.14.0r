import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
import { CoreComponent } from './core.component';

// import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';
 import { Graphic1Component } from './graphic1/graphic1.component';
// import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { PromesasComponent } from './promesas/promesas.component';
// import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: CoreComponent,
        canActivate: [ AuthGuard ],
        children: [
            // { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            // { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar' }},
               { path: 'graphic1', component: Graphic1Component, data: { titulo: 'Gráfica #1' }},
            // { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
            // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CoreRoutingModule {}
