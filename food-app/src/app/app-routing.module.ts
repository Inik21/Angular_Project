import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './guards/access.guard';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './recipe/add/add.component';
import { DetailsComponent } from './recipe/details/details.component';
import { EditComponent } from './recipe/edit/edit.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { EditComponent as userEditComponent } from './user/edit/edit.component';
import { LoginComponent } from './user/login/login.component';
import { MyRecipesComponent } from './user/my-recipes/my-recipes.component';
import { ProfileComponent } from './user/profile/profile.component';
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
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
