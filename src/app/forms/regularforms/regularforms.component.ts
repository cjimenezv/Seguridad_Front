import { Component } from '@angular/core';

import { AuthenticationService } from 'src/app/services/auth/authentication.service';

declare var $: any;

@Component({
    selector: 'app-regularforms-cmp',
    templateUrl: 'regularforms.component.html'
})

export class RegularFormsComponent {

    constructor(private authenticationService: AuthenticationService) {}

    logout(){
        this.authenticationService.logout();
        console.log('ya casi hago logout');
      }

}
