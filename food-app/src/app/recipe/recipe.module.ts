import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [AddComponent, DetailsComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RecipeRoutingModule
  ],
  providers: [
    RecipeService
  ],
  exports: [
    AddComponent,
    DetailsComponent,
    EditComponent
  ]
})
export class RecipeModule { }
