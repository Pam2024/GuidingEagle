import { Component } from '@angular/core';
import {TopPackagesComponent} from "../../shared/top-packages/top-packages.component";
import {AppSectionComponent} from "../../shared/app-section/app-section.component";
import { TopGuidesComponent } from '../../shared/top-guides/top-guides.component';
import {FilterComponent} from "../../shared/filter/filter.component";
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopPackagesComponent, AppSectionComponent, TopGuidesComponent, FilterComponent, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

}
