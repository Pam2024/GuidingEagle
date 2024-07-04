import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { Package, PackageRead } from '../dto/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private httpClient: HttpClient) {
  }

  getFeatured(): Observable<PackageRead[]> {
    return this.httpClient.get<PackageRead[]>(environment.apiBaseUrl + "/packages/featured");
  }

  getList(): Observable<any[]> {
      return this.httpClient.get<any[]>(environment.apiBaseUrl + "/packages");
    }



    getPackageDetails(id: string): Observable<Package> {
      return this.httpClient.get<Package>(environment.apiBaseUrl+ "/packages/details?id="+ id)
     }

}
