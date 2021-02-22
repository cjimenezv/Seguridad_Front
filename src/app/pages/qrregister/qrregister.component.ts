import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-qrregister',
  templateUrl: './qrregister.component.html',
  styleUrls: ['./qrregister.component.css']
})
export class QrregisterComponent implements OnInit {
  public test: Date = new Date();
  public myAngularxQrCode: string = "";

  constructor(private _ar: ActivatedRoute,
    private _authenticationService: AuthenticationService) { 
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    let id  = this._ar.snapshot.paramMap.get('id');
    console.log('id:', id )
    this.myAngularxQrCode = id;
    this.onVerificarTokenRegistro(id);
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }

  onVerificarTokenRegistro(tokenRegistro: String){
    console.log('Vamos a notofocar');
    this._authenticationService.verificarTokenIngreso( tokenRegistro )
          .subscribe(
            data =>  { console.log( data ) },
            error => { console.error( error ) }
    ) ;
  }

}
