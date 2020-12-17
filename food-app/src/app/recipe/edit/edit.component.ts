import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipeData } from 'src/app/interfaces/recipeData';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentRecipe;

  recipeId;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.recipeId = id);
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      recipe => this.currentRecipe = recipe,
      err => console.log(err)
    );
  }

  editRecipeHandler(data: IRecipeData) {
    this.recipeService.editRecipe(data, this.recipeId).subscribe(
      () => this.router.navigate([`/recipe/details/${this.recipeId}`]),
      err => console.log(err)
    );
  }

}
