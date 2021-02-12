import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Respuesta } from 'src/app/models/respuesta';
import { Microzona } from 'src/app/models/tramites/microzona';
import { catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs'

import { environment, listaURLMicrozonas } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicrozonaService {

  constructor(private _httpclient: HttpClient) { }

  /**METODO QUE ME PERMITE CREAR UNA MICROZONA */
  crear(microzona: Microzona){
      return this._httpclient.post<Respuesta>( listaURLMicrozonas.urladicionarMicrozona , microzona)
          .pipe(  catchError( this.controlExcepcion )  )
      ;
  }

  

   /**METODO QUE ME PERMITE ACTUALIZAR UNA MICROZONA */
   actualizar(microzona: Microzona){
       return this._httpclient.post<Respuesta>( listaURLMicrozonas.urlactualizarMicrozona , microzona)
               .pipe(  catchError( this.controlExcepcion )  )
       ;
   }
  


  /**METODO QUE OBTIENE UNA MICROZONA POR IDENTIFICADOR */
  obtenerById(id: any): Observable<Respuesta>  {
      const parametros = new HttpParams()
              .set('id', id);
  
      return  this._httpclient.get<Respuesta>( listaURLMicrozonas.urlgetMicrozona , {params: parametros} )
              .pipe(  catchError( this.controlExcepcion )  ) ;
  
  }

  /**METODO QUE OBTIENE TODOS LAS MICROZONA*/
  getAll(){
    return  this._httpclient.get<Respuesta>( listaURLMicrozonas.urllistarMicrozona )
            .pipe(  catchError( this.controlExcepcion )  ) ;
  }
  

  /**METODO QUE OBTIENE LAS MICROZONAS PAGINADAS */
  obtenerMicrozonasByFiltro(numeroPagina: any, registrosPorPagina: any){
    const parametros = new HttpParams()
            .set('numeroPagina', numeroPagina)
            .set('registrosPorPagina', registrosPorPagina)
            .set('ordenarPor', 'nombreMicrozona')
            .set('ordenAscendente', 'true');

            /*
    const encabezado = new HttpHeaders()
            .set('Authorization','Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoic2ViYXMiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjAyNjgxMzI3LCJleHAiOjE2MDI2ODczMjd9.ja34Mqcg8uCnUr7GFnWiNLBFnifM8xBLOjHgh07AYTA4IeaAGD_DFWk-xWqhVgc8OazxtixAELhPDWf13HMwwg');

    console.log(encabezado);*/
    
    /*
    return  this._httpclient.get<Respuesta> ( listaURLMicrozonas.urllistarMicrozonaByPage , {headers: encabezado, params: parametros} )
            .pipe(  catchError( this.controlExcepcion )  ) ;*/
            
    return  this._httpclient.get<Respuesta> ( listaURLMicrozonas.urllistarMicrozonaByPage , {params: parametros} )
        .pipe(  catchError( this.controlExcepcion )  ) ;

  }


  /**METODO QUE ELIMINA UNA MICROZONA*/
  eliminar(id: any){
    const parametros = new HttpParams()
            .set('id', id);

    return  this._httpclient.get<Respuesta>( listaURLMicrozonas.urleliminarMicrozona , {params: parametros} )
            .pipe(  catchError( this.controlExcepcion )  ) ;
  }


  controlExcepcion( _error: HttpErrorResponse ){
      console.log(_error);
      return throwError(_error);
  }  

}
