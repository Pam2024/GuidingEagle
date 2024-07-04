import { PackageService } from './../../services/package.service';
import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PackageRead } from '../../dto/package';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-top-packages',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './top-packages.component.html',
  styleUrl: './top-packages.component.css'
})
export class TopPackagesComponent implements OnInit {
  items: PackageRead[] = [];
  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.initItems();
  }

  private initItems() {
    this.packageService.getFeatured().subscribe({
      next: (o: PackageRead[]) => {
        this.items = o;
      },
      error: (e: any) => {
        console.error(e);
        alert("Error reading featured packages!");
      }
    });
  }

  environment = environment;
}
