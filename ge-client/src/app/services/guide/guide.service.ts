import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Filter} from "../../dto/filter";
import {HttpClient} from "@angular/common/http";
import {City} from "../../dto/city";
import {environment} from "../../../environments/environment";
import {User, UserRead} from "../../dto/user";

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  private searchSubscriber: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(GuideService.getFromLocalStorage());
  private filter: Filter = GuideService.getFromLocalStorage();
  searchSubscribe$ = this.searchSubscriber.asObservable();

  constructor(private httpClient: HttpClient) {
    this.filter = GuideService.getFromLocalStorage();
  }

  static getFromLocalStorage(): Filter {
    let filter: Filter = {cityId: '', date: undefined};

    try {
      filter = JSON.parse(localStorage.getItem("filter") || "");
    } catch (ex) {
      console.info("Error loading filter from local storage")
    }

    console.info("Filter: ", filter)
    return filter;
  }

  static setInLocalStorage(filter: Filter) {
    localStorage.setItem("filter", JSON.stringify(filter));
  }

  clearLocalStorage() {
    localStorage.removeItem("filter");
    this.filter = {cityId: undefined, date: undefined};
    this.searchSubscriber.next(this.filter);
  }


  setFilter(filter: Filter) {
    this.filter = filter;
    GuideService.setInLocalStorage(filter)
    this.searchSubscriber.next(this.filter);
  }

  getList(): Observable<UserRead[]> {
    const url = environment.apiBaseUrl + "/users/list?cityId=" +
      (this.filter && this.filter.cityId ? this.filter.cityId : "")  +
      "&date=" + (this.filter && this.filter.date ? this.filter.date : "");
    return this.httpClient.get<UserRead[]>(url);
  }
}
