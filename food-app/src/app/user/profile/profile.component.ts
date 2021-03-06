import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get user(): IUser {
    return this.usersService.user;
  }

  recipesCount: number;

  constructor(public usersService: UsersServiceService, public recipeService: RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipesByUserId(this.usersService.user.objectId).subscribe(
      (recipes) => this.recipesCount = recipes.length,
      err => console.log(err)
    );
  }

  editHandler() {
    this.router.navigate(['/user/edit'])
  }

  changePasswordEmailHandler() {
    this.usersService.sentChangePasswordEmail(this.user.email).subscribe(
      () => this.router.navigate(['']),
      err => console.log(err)
    );
  }

}
