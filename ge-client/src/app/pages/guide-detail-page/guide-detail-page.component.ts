import { environment } from './../../../environments/environment';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

import { User, UserRead } from '../../dto/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-detail-page',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './guide-detail-page.component.html',
  styleUrl: './guide-detail-page.component.css'
})
export class GuideDetailPageComponent implements OnInit{

  constructor( private route: ActivatedRoute, private userService: UserService) {}

  item: UserRead={

  }

  ngOnInit(): void {
    this.getDetails();
  }

   getDetails(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.userService.getUserDetails(userId).subscribe({
        next: (user: UserRead) => {
          this.item = user;
        },
        error: (error) => {
         console.error('Error fetching user details:', error);
        }
      });
    });
  }

  environment=environment


}

