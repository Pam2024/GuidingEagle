import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PackageService } from '../../services/package.service';
import { PackageRead } from '../../dto/package';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-package-detail-page',
  standalone: true,
  imports: [CommonModule,NavBarComponent,RouterModule,FormsModule,CommonModule],
  templateUrl: './package-detail-page.component.html',
  styleUrl: './package-detail-page.component.css'
})
export class PackageDetailPageComponent implements OnInit{
  items: any = {};
  constructor( private route: ActivatedRoute, private packageService: PackageService) {}

  item: PackageRead={
  }
  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.route.params.subscribe(params => {
      const packId = params['id'];
      this.packageService.getPackageDetails(packId).subscribe({
        next: (pack: PackageRead) => {
          this.item = pack;
        },
        error: (error) => {
          console.error('Error fetching package details:', error);
        }
      });
    });
  }


  environment=environment;

}
