import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../user/users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(public userService: UsersServiceService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.user === undefined) {
      
    }
    const isUserLogged = !!this.userService.user;
    const shouldUserBeLogged = !!route.data.shouldLogged;
    if (isUserLogged === shouldUserBeLogged) {
      return true;
    }
    return false;
  }

}
