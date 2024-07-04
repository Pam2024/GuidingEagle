import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { routes } from './app.routes';
import {CommonModule} from "@angular/common";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {BsDatepickerDirective, BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {GuideService} from "./services/guide/guide.service";
import {AlertModule} from "ngx-bootstrap/alert";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), AlertModule, TooltipModule, provideHttpClient(), ButtonsModule, CarouselModule, CommonModule, provideRouter(routes)]
};
