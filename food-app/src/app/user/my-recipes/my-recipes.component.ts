import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  recipes;

  userId;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute, private router: Router, public usersService: UsersServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => this.userId = id);
    this.recipeService.getRecipesByUserId(this.userId).subscribe(
      recipes => this.recipes = recipes,
      err => console.log(err)
    );
  }

  deleteRecipeHandler(recipeId: string) {
    this.recipeService.deleteRecipe(recipeId).subscribe(
      () => this.router.navigate([''])
      .then(()=>{this.router.navigate([`/user/myRecipes/${this.usersService.user.objectId}`])}),
      err => console.log(err)
    );
  }

}
