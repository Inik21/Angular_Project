import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegisterData } from '../interfaces/register';
import {tap} from 'rxjs/operators'
import { ILoginData } from '../interfaces/login';

@Injectable()
export class UsersServiceService {

  user;

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  login(data:ILoginData): Observable<any> {
    return this.http.post(this.apiUrl + '/users/login', data).pipe(
      tap(user => this.user = user)
    );
  }

  register(data: IRegisterData): Observable<any> {
    return this.http.post(this.apiUrl + '/users/register',data);
  }

  logout(): Observable<any> {
    return this.http.get(this.apiUrl + '/users/logout').pipe(
      tap(this.user = null)
    );
  }

}
