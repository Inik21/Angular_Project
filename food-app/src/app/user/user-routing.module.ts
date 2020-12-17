import { RouterModule, Routes } from "@angular/router";
import { AccessGuard } from "../guards/access.guard";
import { LoginComponent } from "./login/login.component";
import { MyRecipesComponent } from "./my-recipes/my-recipes.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { EditComponent as userEditComponent } from './edit/edit.component';
import { ChangePasswordComponent } from "./change-password/change-password.component";


const routes: Routes = [
    {
        path: 'user',
        canActivateChild: [AccessGuard],
        children: [
            {
                path: 'login',
                data: {
                    shouldLogged: false
                },
                component: LoginComponent
            },
            {
                path: 'register',
                data: {
                    shouldLogged: false
                },
                component: RegisterComponent
            },
            {
                path: 'myRecipes/:id',
                data: {
                    shouldLogged: true
                },
                component: MyRecipesComponent
            },
            {
                path: 'profile',
                data: {
                    shouldLogged: true
                },
                component: ProfileComponent
            },
            {
                path: 'edit',
                data: {
                    shouldLogged: true
                },
                component: userEditComponent
            },
            {
                path: 'changePassword/:email',
                data: {
                    shouldLogged: false
                },
                component: ChangePasswordComponent
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);