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

  constructor(public http: HttpClient, public userService: UsersServiceService) { }

  editRecipe(data, id): Observable<any> {
    return this.http.put(`${this.apiUrl}/data/Recipes/${id}`,data,{ headers: new HttpHeaders({ 'user-token': `${this.userService.userToken}` }) })
  }

  getRecipesByUserId(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/data/Recipes?where=ownerId%20%3D%20'${id}'`, { headers: new HttpHeaders({ 'user-token': `${this.userService.userToken}` }) });
  }

  getRecipeById(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/data/Recipes/${id}`, { headers: new HttpHeaders({ 'user-token': `${this.userService.userToken}` }) });
  }

  getAllRecipes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data/Recipes`);
  }

  addRecipe(data: IRecipeData): Observable<any> {
    this.serverData = JSON.stringify(data);
    return this.http.post(`${this.apiUrl}/data/Recipes`, this.serverData, { headers: new HttpHeaders({ 'user-token': `${this.userService.userToken}` }) });
  }

}
