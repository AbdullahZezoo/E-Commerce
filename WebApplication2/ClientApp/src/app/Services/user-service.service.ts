import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private _http: HttpClient,  @Inject('BASE_URL') baseUrl: string) {
      this.myAppUrl = baseUrl;
      this.myApiUrl = 'api/Users/';
  }
  
    getUsers(): Observable<User[]> {  
      return this._http.get<User[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1)
      );
    } 
    
    addUser(user): Observable<User>{
      return this._http.post<User>(this.myAppUrl + this.myApiUrl, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1)
      ) 
    }

    getUserId(userId: string): Observable<User>{
      return this._http.get<User>(this.myAppUrl + this.myApiUrl + userId)
      .pipe(
        retry(1)
      )
    }


    editUser(userId: string, user): Observable<User>{
      return this._http.put<User>(this.myAppUrl + this.myApiUrl + userId, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1)
      )
    }

    deleteUser(userId: string): Observable<User>{
      return this._http.delete<User>(this.myAppUrl + this.myApiUrl + userId)
      .pipe(
        retry(1)
      )
    }
}
