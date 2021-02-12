import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { Microzona } from 'src/app/models/tramites/microzona';
import { MicrozonaService } from 'src/app/services/tramites/microzona.service';

@Component({
  selector: 'app-listar-microzonas',
  templateUrl: './listar-microzonas.component.html',
  styleUrls: ['./listar-microzonas.component.css']
})
export class ListarMicrozonasComponent implements OnInit {

    /** DEFINICION DE VARIABLES*/
    public microzona: Microzona;
    public listaMicrozonas: Microzona[];
    public register = false;
    public SettingsTipoDocumento = {};
    public paginaActual: number = 0;
    public registrosPorPagina: number = 5;
    public deshabilitarAnterior: boolean = true;
    public deshabilitarSiguiente: boolean = false;

    /** FIN DE DEFINICION DE VARIABLES*/
  


    constructor( 
      private _microzonaservice: MicrozonaService,
      private _router: Router) { }


    ngOnInit() {
        console.log('ListarmicrozonasComponent trabajando y sin problemassss!!!');
        this.enviarDatos();
    }
  

    ngOnDestroy() {
      console.log('ListarmicrozonasComponent...me acabo de destruir!!!');
    }
  


  enviarDatos(){
        this.register = true;
        console.log(this.paginaActual);
        this._microzonaservice.obtenerMicrozonasByFiltro(this.paginaActual, this.registrosPorPagina)
        .pipe(first())
        .subscribe(
          data =>  this.mostrarRegistros ( data ),
          error => console.error( error.statusText )
        ) ;
  }


  


  paginaAnterior(){
    this.paginaActual = this.paginaActual - 1;
    if( this.paginaActual <= 0) this.deshabilitarAnterior = true;
    this.enviarDatos();
    console.log(this.paginaActual);
  }

  paginaSiguiente(){
    this.paginaActual = this.paginaActual + 1;
    console.log(this.paginaActual);
    if( this.paginaActual > 0) this.deshabilitarAnterior = false;
    this.enviarDatos();
  }

  mostrarRegistros(datos){
    console.log(datos);
    this.listaMicrozonas = datos.objeto;
    //se almacenan los datos por si hay que hacer un retorno
  }

  
  verDetalle(idTercero){
    this._router.navigate(['/terceros/actualizar', idTercero]);
  }

  consultarDetalle(idTercero){
    this._router.navigate(['/terceros/consultar', idTercero]);
  }
  
  interactuarPor(idTercero){
    this._router.navigate(['/terceros/interactuar', idTercero]);
  }

  eliminarRegistro(idTercero){
    this._router.navigate(['/terceros/eliminar', idTercero]);
  }


  refrescarLista( datos ){
    console.log(datos);
    this.enviarDatos();
  }

  /**METODOS HECHOS PARA RETORNAR CADA CONTROL */


  /**FIN METODOS HECHOS PARA RETORNAR CADA CONTROL */


}
