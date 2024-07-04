import {User} from './../../dto/user';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getFeatured(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiBaseUrl + "/users/featured");
  }

  signUp(user: User): Observable<Object> {
    return this.httpClient.post<any>(environment.apiBaseUrl + "/users/sign-up", user);
  }

  login(user: User): Observable<Object> {
    return this.httpClient.post(environment.apiBaseUrl + "/users/login", user)
  }

  getUserDetails(id: String): Observable<User> {
   return this.httpClient.get<User>(environment.apiBaseUrl+ "/users/details?id="+ id)
  }
}
