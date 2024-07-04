import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { User } from "../../dto/user";
import { UserService } from "../../services/user/user.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-top-guides',
  standalone:true,
  templateUrl: './top-guides.component.html',
  styleUrls: ['./top-guides.component.css'],
  imports: [SlickCarouselModule,]
})
export class TopGuidesComponent implements OnInit {
  slides: User[] = [];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initSlides();
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  private initSlides() {
    this.userService.getFeatured().subscribe({
      next: (o: User[]) => {
        this.slides = o;
      },
      error: (e: any) => {
        console.error(e);
        alert("Error reading featured guides!");
      }
    });
  }

  environment = environment;
}
