import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes = null;
  
  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(recipes => this.recipes=recipes)
  }

}
