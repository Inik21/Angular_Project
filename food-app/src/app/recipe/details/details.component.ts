import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  recipe;

  recipeId

  constructor(public recipeService: RecipeService, public route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe(({id})=> this.recipeId = id);
    this.recipeService.getRecipeById(this.recipeId).subscribe(
      recipe => this.recipe = recipe,
      err => console.log(err)
    )
  }

  

}
