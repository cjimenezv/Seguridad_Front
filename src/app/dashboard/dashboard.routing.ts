import { Routes } from '@angular/router';

import { AuthGuard } from 'src/app/jwthelpers/auth-guard';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }]
}
];
