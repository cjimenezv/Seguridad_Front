import { Routes } from "@angular/router";
import { AuthGuard } from 'src/app/jwthelpers/auth-guard';

import { ListarMicrozonasComponent } from './listar-microzonas/listar-microzonas.component';
export const MicrozonasRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "listar",
        component: ListarMicrozonasComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
