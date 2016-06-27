import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AppComponent} from '../../my-good-app.component';
import {AuthService} from '../../services/auth.service';
import {Logger} from '../../services/logger.service';
import {AppWideComponent} from '../app-wide/app-wide.component';

@Component({
  moduleId: module.id,
  inputs: ['redirectToUrl'],
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {  

  private userName: string;
  private password: string;

  constructor(private authService: AuthService, private log: Logger, private router: Router, private appWide: AppWideComponent) {
    log.info('Instantiating LoginComponent');
  }

  ngOnInit() { }

  public login() {
    this.authService.doLogin(this.userName, this.password).subscribe((res) => {
      if (res) {
        this.router.navigate([this.appWide.redirectToUrl]);
        this.appWide.redirectToUrl = '';
      }
    });
  }
}
