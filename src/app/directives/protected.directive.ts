import {Directive, OnDestroy, ViewContainerRef, TemplateRef} from '@angular/core';

import {AuthService} from '../services/auth.service';
import {Logger} from '../services/logger.service';

@Directive({
  selector: '[hasPermission]',
  inputs: ['hasPermission', 'toto', 'titi']
})
export class Protected implements OnDestroy {
  private sub: any = null;

  constructor(
    private authService: AuthService,
    private log: Logger,
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<Object>
  ) {
    log.info("Instantiating Protected")
  }

  set hasPermission(permissions: string[]) {
    this.log.info("Asked Permission : " + permissions);
    let hasPermission = permissions.some(permission => {
      if (this.authService.permissions.indexOf(permission) > -1) {
        return true;
      }
    });
    if (hasPermission) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

  set toto(toto) {

    this.log.info(toto);
  }

  set titi(titi) {
    this.log.info(titi);
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}
