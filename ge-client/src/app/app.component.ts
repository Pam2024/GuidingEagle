import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { setTheme } from 'ngx-bootstrap/utils';
import {GuideListPageComponent} from './pages/guide-list-page/guide-list-page.component';
import { FormsModule } from '@angular/forms';
import {GuideService} from "./services/guide/guide.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,RouterModule,MenuComponent,NavBarComponent,FooterComponent,GuideListPageComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guiding-eagle-client';

  constructor() {
    setTheme('bs5');
  }
}
