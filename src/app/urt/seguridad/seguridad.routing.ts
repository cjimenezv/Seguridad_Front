import { Routes } from "@angular/router";
import { AuthGuard } from 'src/app/jwthelpers/auth-guard';


import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { QrComponent } from "./qr/qr.component";

export const SeguridadRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "crearusuario",
        component: CrearUsuarioComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "qr",
        component: QrComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
