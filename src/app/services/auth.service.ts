import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  
  user: any;

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  hasRole(roles: string[]): boolean {
    return false
  }
}
