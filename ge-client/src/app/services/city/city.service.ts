import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../dto/user";
import {environment} from "../../../environments/environment";
import {City} from "../../dto/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<City[]> {
    return this.httpClient.get<City[]>(environment.apiBaseUrl + "/cities");
  }
}
