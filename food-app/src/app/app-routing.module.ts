import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './guards/access.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
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
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
