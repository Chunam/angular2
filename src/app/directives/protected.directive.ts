import {Location} from '@angular/common';
import {Directive, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Directive({selector: '[protected]'})
export class Protected implements OnDestroy {
  private sub: any = null;

  constructor(
      private authService: AuthService, private router: Router, private location: Location) {
    if (!authService.isAuthenticated) {
      this.router.navigate(['/login/']);
    }

    this.sub = authService.subscribe((val) => {
      if (!val.authenticated) {
        this.location.replaceState('/');
        this.router.navigate(['LoggedoutPage']);
      }
    });
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}
