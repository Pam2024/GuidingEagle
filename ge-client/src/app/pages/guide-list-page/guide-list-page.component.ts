import { environment } from './../../../environments/environment';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {FilterComponent} from "../../shared/filter/filter.component";
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";
import {TopGuidesComponent} from "../../shared/top-guides/top-guides.component";
import {Subscription} from "rxjs";
import {GuideService} from "../../services/guide/guide.service";
import {User, UserRead} from "../../dto/user";
import {AlertModule} from "ngx-bootstrap/alert";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-guide-list-page',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FilterComponent, NavBarComponent, TopGuidesComponent, AlertModule, NgIf],
  templateUrl: './guide-list-page.component.html',
  styleUrl: './guide-list-page.component.css'
})
export class GuideListPageComponent implements OnInit, OnDestroy {
  searchBoxSubscription?: Subscription;
  items: UserRead[] = [];
  loading: boolean = false;

  constructor(private guideService: GuideService) {

  }

  ngOnInit(): void {
    if (this.searchBoxSubscription)
      this.searchBoxSubscription.unsubscribe();

    this.searchBoxSubscription = this.guideService.searchSubscribe$.subscribe({
      next: search => {
        console.info("Filter data changed: ", search)
        this.loadItems();
        /*this.search();
        this.category = this.productService.getCategory();*/
      }
    })
  }

  ngOnDestroy(): void {
    if (this.searchBoxSubscription)
      this.searchBoxSubscription.unsubscribe();
  }

  loadItems() {
    this.loading = true;
    this.guideService.getList().subscribe({
      next: items => {
        this.items = items;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
        alert("Error loading guides!")
      }
    })
  }

  environment=environment;
}
