import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



import { environment, listaURLUsuarios } from 'src/environments/environment';
import { User } from 'src/app/models/auth/user';
import { Respuesta } from 'src/app/models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private _http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      console.log('voy a llamar servicio');
      const parametros = new HttpParams()
      .set('username', username)
      .set('password', password);

      return this._http.post<any>(`${environment.apiUrlSeguridad}/seguridad/autenticar`, parametros)
          .pipe(map(dato => {
             let user = dato.objeto;
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              console.log('servicio llamado');
              localStorage.setItem('currentUser', JSON.stringify(user));
              console.log('currentUser es :', localStorage.getItem('currentUser'));
              this.currentUserSubject.next(user);
              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

  /**METODO QUE ME PERMITE CREAR UN TERCERO */
  crear(usuario: User){
    return this._http.post<Respuesta>( listaURLUsuarios.urladicionarUsuario ,usuario)
        .pipe(  catchError( this.controlExcepcion )  )
    ;
  }

   /**METODO QUE PERMITE NOTIFICAR A UN USUARIO SOBRE LA CREACION */
   notificarRegistroUsuarioById(id: any): Observable<Respuesta>  {
    const parametros = new HttpParams()
            .set('id', id);

    return  this._http.get<Respuesta>( listaURLUsuarios.urlnotificarRegistroUsuarioById , {params: parametros} )
            .pipe(  catchError( this.controlExcepcion )  ) ;

    }

    controlExcepcion( _error: HttpErrorResponse ){
      return throwError(_error);
    }

}
