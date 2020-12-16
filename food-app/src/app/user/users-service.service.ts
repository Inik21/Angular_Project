import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegisterData } from '../interfaces/register';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  user = null;

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  register(data: IRegisterData): Observable<any> {
    return this.http.post(this.apiUrl + '/users/register',data).pipe(
      tap(user => this.user=user)
    );
  }

}
