import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRecipeData } from '../interfaces/recipe';
import { UsersServiceService } from '../user/users-service.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiUrl = environment.apiURL;

  serverData;

  constructor(public http: HttpClient, public userService:UsersServiceService) { }

  getAllRecipes() {
    return this.http.get(`${this.apiUrl}/data/Recipes`);
  }

  addRecipe(data: IRecipeData): Observable<any> {
    this.serverData = JSON.stringify(data);
    return this.http.post(`${this.apiUrl}/data/Recipes`, this.serverData, { headers: new HttpHeaders({ 'user-token': `${this.userService.userToken}` }) });
  }

}
