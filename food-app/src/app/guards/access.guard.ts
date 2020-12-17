import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../user/users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate, CanActivateChild {

  constructor(public userService: UsersServiceService, private router: Router) {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.user === undefined) {
      
    }
    const isUserLogged = !!this.userService.user;
    const shouldUserBeLogged = !!childRoute.data.shouldLogged;
    if (isUserLogged === shouldUserBeLogged) {
      return true;
    }
    this.router.navigate(['user/login'])
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.user === undefined) {
      
    }
    const isUserLogged = !!this.userService.user;
    const shouldUserBeLogged = !!route.data.shouldLogged;
    if(route.routeConfig.path === 'home'){
      return true;
    }
    if (isUserLogged === shouldUserBeLogged) {
      return true;
    }
    this.router.navigate(['user/login'])
    return false;
  }

}
