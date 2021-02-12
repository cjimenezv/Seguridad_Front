import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";


/**IMPORTACION DE ROUTING*/
import { BaseRoutes } from "./base.routing";

/**IMPORTACION DE COMPONENTES PROPIOS DEL MODULO*/
import { BaseComponent } from './base/base.component';



@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BaseRoutes),
  ]
})
export class BaseModule { }
