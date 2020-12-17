import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipeData } from 'src/app/interfaces/recipeData';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  addRecipeHandler(data: IRecipeData) {
    this.recipeService.addRecipe(data).subscribe(
      () => this.router.navigate(['']),
      err => console.log(err)
    )
  }

}
