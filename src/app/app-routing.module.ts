import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
//import { createDeflateRaw } from 'zlib';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/carImage/carImage.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LoginComponent } from './components/login/login.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';

import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { CarImageService } from './Services/carImage.service';
//cars => CarDetailComponent
//rentals => RentalComponent 
const routes: Routes = [
  // {path:"cars",component:CarDetailComponent},
  // {path:"brands", component:BrandComponent},

  {path:"cars", component: CarComponent},
  {path:"cars/brand/:brandId", component: CarComponent},
  {path:"cars/color/:colorId", component: CarComponent},
  {path:"cars/images/:carId",component:CarImageComponent},
  {path:"rentals/rentACar/:carId", component: RentalAddComponent},
  {path:"creditcards", component: CreditCardComponent},
  {path:"cars/add", component: CarAddComponent, canActivate:[LoginGuard]},
  {path:"colors/add", component: ColorAddComponent},
  {path:"brands/add", component: BrandAddComponent},
  {path:"login", component: LoginComponent},
  {path:"color/updates/:colorId", component: ColorUpdateComponent},
  {path:"brand/updates/:brandId", component: BrandUpdateComponent},
  {path:"cars/updates/:carId", component: CarUpdateComponent},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
