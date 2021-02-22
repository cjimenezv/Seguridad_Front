import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { QRCodeModule } from 'angularx-qrcode';
import { MaterialModule } from 'src/app/app.module';


import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FieldErrorDisplayComponent } from 'src/app/forms/validationforms/field-error-display/field-error-display.component';

/**IMPORTACION DE ROUTING*/
import { SeguridadRoutes } from "./seguridad.routing";
import { QrComponent } from './qr/qr.component';

@NgModule({
  declarations: [CrearUsuarioComponent, FieldErrorDisplayComponent, QrComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SeguridadRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
    QRCodeModule
  ]
})
export class SeguridadModule { }
