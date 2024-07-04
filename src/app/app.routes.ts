import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {GuideListPageComponent} from "./pages/guide-list-page/guide-list-page.component";
import {PackageListPageComponent} from "./pages/package-list-page/package-list-page.component";
import {GuideDetailPageComponent} from "./pages/guide-detail-page/guide-detail-page.component";
import {PackageDetailPageComponent} from "./pages/package-detail-page/package-detail-page.component";
import {SignInPageComponent} from "./pages/sign-in-page/sign-in-page.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";
import {WishlistPageComponent} from "./pages/wishlist-page/wishlist-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import { HireComponent } from './shared/hire/hire.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'guides', component: GuideListPageComponent},
  { path: 'packages', component: PackageListPageComponent},
  { path: 'guide-detail/:id', component: GuideDetailPageComponent},
  { path: 'package-detail/:id', component: PackageDetailPageComponent},
  { path: 'sign-in', component: SignInPageComponent},
  { path: 'sign-up', component: SignUpPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'wishlist', component: WishlistPageComponent},
  { path: 'hire', component: HireComponent},
];
