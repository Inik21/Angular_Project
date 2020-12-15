import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
