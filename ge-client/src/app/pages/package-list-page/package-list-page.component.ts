import { environment } from './../../../environments/environment';
import { Component,OnInit } from '@angular/core';
import {PackageRead} from "../../dto/package";
import {PackageService} from "../../services/package.service";
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-package-list-page',
  standalone: true,
  imports: [NavBarComponent,RouterOutlet, RouterModule,RouterLink],
  templateUrl: './package-list-page.component.html',
  styleUrl: './package-list-page.component.css'
})
export class PackageListPageComponent implements OnInit {
items: PackageRead[] = [];
loading: boolean = false;
 constructor(private packageService: PackageService) {

  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
      this.loading = true;
      this.packageService.getList().subscribe({
        next: items => {
          this.items = items;
          this.loading = false;
        },
        error: err => {
          this.loading = false;
          console.error(err);
          alert("Error loading packages!")
        }
      })
    }

    environment=environment;
}
