import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RecipeService,
    HttpClientModule
  ],
  exports: [
    AddComponent,
    DetailsComponent
  ]
})
export class RecipeModule { }
