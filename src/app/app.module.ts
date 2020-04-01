import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { BrandsComponent } from './brands/brands.component';
import { OffersComponent } from './offers/offers.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { GymOfferAddComponent } from './gymoffer-add/gymoffer-add.component';
import { GymOfferComponent } from './gymoffer/gymoffer.component';
import { GymOfferEditComponent } from './gymoffer-edit/gymoffer-edit.component';
import { GymOfferDetailComponent } from './gym-offer-detail/gym-offer-detail.component';
import { GymOfferDetailAddComponent } from './gym-offer-detail-add/gym-offer-detail-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    BrandsComponent,
    OffersComponent,
    BrandAddComponent,
    GymOfferAddComponent,
    GymOfferComponent,
    GymOfferEditComponent,
    GymOfferDetailComponent,
    GymOfferDetailAddComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
