import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @ViewChild("menu") menu?: any;
  @ViewChild("menuButton") menuButton?: any;

  openNav() {
    this.menu?.nativeElement?.classList?.toggle("menu_width");
    this.menuButton?.nativeElement?.classList?.toggle("menu_btn-style");
  }
}
