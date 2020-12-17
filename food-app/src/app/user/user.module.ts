import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UsersServiceService } from './users-service.service';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MyRecipesComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    UsersServiceService
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MyRecipesComponent,
    ProfileComponent,
    EditComponent
  ]
})
export class UserModule { }
