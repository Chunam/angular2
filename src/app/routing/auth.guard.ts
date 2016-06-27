import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AppWideComponent} from '../components/app-wide/app-wide.component';
import {AuthService} from '../services/auth.service';
import {Logger} from '../services/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router,
        private log: Logger, private appWide: AppWideComponent) {
        log.info('Instantiating AuthGuard');
    }

    canActivate(
        // Not using but worth knowing about
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.appWide.redirectToUrl = state.url;
            this.router.navigate(['/login']);
        }
        return false;
    }
}