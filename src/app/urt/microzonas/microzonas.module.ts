import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ErrorInterceptor } from 'src/app/jwthelpers/error-interceptor';
import { JwtInterceptor } from 'src/app/jwthelpers/jwt-interceptor';


/**IMPORTACION DE COMPONENTES PROPIOS DEL MODULO*/
import { ListarMicrozonasComponent } from './listar-microzonas/listar-microzonas.component';

/**IMPORTACION DE ROUTING*/
import { MicrozonasRoutes } from "./microzonas.routing";



@NgModule({
  declarations: [ListarMicrozonasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MicrozonasRoutes)
  ],
  providers : [
  ],
})
export class MicrozonasModule { }
