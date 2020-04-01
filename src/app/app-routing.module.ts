import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrandsComponent } from './brands/brands.component';
import { UserComponent } from './user/user.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { OffersComponent } from './offers/offers.component';
import { GymOfferAddComponent } from './gymoffer-add/gymoffer-add.component';
import { GymOfferComponent } from './gymoffer/gymoffer.component';
import { GymOfferDetailComponent } from './gym-offer-detail/gym-offer-detail.component';
import { GymOfferDetailAddComponent } from './gym-offer-detail-add/gym-offer-detail-add.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'brand/add', component: BrandAddComponent },
  { path: 'brand/:id/offers', component: OffersComponent },
  { path: 'brand/:bid/offer/:id/details', component: GymOfferComponent },
  { path: 'brand/:bid/offer/add', component: GymOfferAddComponent },
  { path: 'brand/:bid/offer/:oid/detail/:id/edit', component: GymOfferDetailComponent },
  { path: 'brand/:bid/offer/:id/detail/add', component: GymOfferDetailAddComponent },
  // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { enableTracing: true, useHash: true });
