import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import {AppComponent} from '../../my-good-app.component';
import {AuthService} from '../../services/auth.service';
import {Logger} from '../../services/logger.service';
import {AppWideComponent} from '../app-wide/app-wide.component';

@Component({
  moduleId: module.id,  
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  // private userName: string;
  // private password: string;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private log: Logger,
    private router: Router,
    private appWide: AppWideComponent,
    private formBuilder: FormBuilder) {
    log.info('Instantiating LoginComponent');
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['']);
    }
    this.loginForm = this.formBuilder.group(
      {
        userName: ['admin', Validators.required],
        password: ['admin', Validators.required]
      }
    );
  }

  public login() {
    this.log.info(this.loginForm.value);
    this.authService.doLogin(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe((res) => this.redirect.bind(this)(res))
  }

  private redirect(res) {
    if (res) {
      this.router.navigate([this.appWide.redirectToUrl]);
      this.appWide.redirectToUrl = '';
    }
  }
}
