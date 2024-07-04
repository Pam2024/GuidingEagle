import {Component, OnDestroy, OnInit} from '@angular/core';
import {CityService} from "../../services/city/city.service";
import {City} from "../../dto/city";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {Filter} from "../../dto/filter";
import {FormsModule} from "@angular/forms";
import {GuideService} from "../../services/guide/guide.service";
import {JsonPipe, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import { Subscription} from "rxjs";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [BsDatepickerModule, FormsModule, JsonPipe, NgIf],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit, OnDestroy {
  filte: any = {
    cityId: '' // Initialize to empty string
  };

  cities: City[] = [];
  filter: Filter = {};
  searchBoxSubscription?: Subscription;

  constructor(private cityService: CityService, private guideService: GuideService, private router: Router) {
  }

  ngOnDestroy(): void {
    if (this.searchBoxSubscription)
      this.searchBoxSubscription.unsubscribe();
  }

  ngOnInit(): void {
    if (this.searchBoxSubscription)
      this.searchBoxSubscription.unsubscribe();

    this.searchBoxSubscription = this.guideService.searchSubscribe$.subscribe({
      next: search => {
        this.filter = search;
      }
    })


    this.cities = [];
    this.cityService.getAll().subscribe({
      next: cities => {
        this.cities = cities;
      },
      error: err => {
        console.error(err);
        alert("Could not load cities for filter!")
      }
    })
  }

  doSearch() {
    console.info("search clicked")
    this.guideService.setFilter(this.filter);
    this.router.navigateByUrl('/guides')
  }

  clearSearch() {
    this.guideService.clearLocalStorage();
  }
}
