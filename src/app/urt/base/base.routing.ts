import { Routes } from "@angular/router";
import { AuthGuard } from 'src/app/jwthelpers/auth-guard';


import { BaseComponent } from './base/base.component';
export const BaseRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "ejemplo",
        component: BaseComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
