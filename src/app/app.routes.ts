import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'service-single', component: ServicesPageComponent },
  { path: 'about', component: HomeComponent },
  { path: 'booking', component: HomeComponent },
  { path: 'track', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'blog', component: HomeComponent },
  { path: 'faq', component: HomeComponent },
  { path: 'testimonials', component: HomeComponent },
  { path: 'team', component: HomeComponent },
  { path: 'careers', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
