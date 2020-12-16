import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './guards/access.guard';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './recipe/add/add.component';
import { DetailsComponent } from './recipe/details/details.component';
import { LoginComponent } from './user/login/login.component';
import { MyRecipesComponent } from './user/my-recipes/my-recipes.component';
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
    path: 'user/myRecipes/:id',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: true
    },
    component: MyRecipesComponent
  },
  {
    path: 'recipe/add',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: true
    },
    component: AddComponent
  },
  {
    path: 'recipe/details/:id',
    canActivate: [AccessGuard],
    data: {
      shouldLogged: true
    },
    component: DetailsComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
