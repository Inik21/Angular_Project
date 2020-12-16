import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../user/users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(public userService: UsersServiceService, private router: Router) {

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
    this.router.navigate([''])
    return false;
  }

}
