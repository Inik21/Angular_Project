import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path:'user/login',
    component: LoginComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
