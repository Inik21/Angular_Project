import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  recipes;

  userId;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => this.userId = id);
    this.recipeService.getRecipesByUserId(this.userId).subscribe(
      recipes => this.recipes = recipes,
      err => console.log(err)
    );
  }

}
