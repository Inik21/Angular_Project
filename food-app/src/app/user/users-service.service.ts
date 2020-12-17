import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegisterData } from '../interfaces/register';
import {tap} from 'rxjs/operators'
import { ILoginData } from '../interfaces/login';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable()
export class UsersServiceService {

  user;

  get userToken() {
    return this.user["user-token"];
  }

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  editUser(data: any) {
    return this.http.put(`${this.apiUrl}/data/Users/${this.user.objectId}`,data,{ headers: new HttpHeaders({ 'user-token': `${this.userToken}` }) }).pipe(
      tap((user) => {
        this.user.firstName = user["firstName"];
        this.user.lastName = user["lastName"];
        this.user.email = user["email"];
      })
    );
  }

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
