import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './guards/access.guard';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './recipe/add/add.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: false
    },
    component: HomeComponent
  },
  {
    path:'user/login',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: false
    },
    component: LoginComponent
  },
  {
    path: 'user/register',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: false
    },
    component: RegisterComponent
  },
  {
    path: 'recipe/add',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: true
    },
    component: AddComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
