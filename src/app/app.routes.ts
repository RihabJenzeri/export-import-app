import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'about',          component: HomeComponent },
  { path: 'services',       component: HomeComponent },
  { path: 'service-single', component: HomeComponent },
  { path: 'booking',        component: HomeComponent },
  { path: 'track',          component: HomeComponent },
  { path: 'contact',        component: HomeComponent },
  { path: 'blog',           component: HomeComponent },
  { path: 'faq',            component: HomeComponent },
  { path: 'testimonials',   component: HomeComponent },
  { path: 'team',           component: HomeComponent },
  { path: 'careers',        component: HomeComponent },
  { path: '**',             redirectTo: '' }
];
