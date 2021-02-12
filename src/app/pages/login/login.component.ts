import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { first } from 'rxjs/operators';


import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { User } from 'src/app/models/auth/user';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {

    /** DEFINICION DE VARIABLES*/
    public register = false;
    public usuarioApp: User;
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    public username: string = "";
    public password: string = "";
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
   /** FIN DE DEFINICION DE VARIABLES*/
    

    constructor(private element: ElementRef,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {

        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 0);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }

    autenticar(){
        console.log('username:', this.username);
        console.log('password:', this.password);
        console.log("voy a enviar datos");
        console.log("voy a llamar servicio");
        
        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    console.log('voy a retornar:', returnUrl);
                    this.router.navigate([returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });
    }
}
