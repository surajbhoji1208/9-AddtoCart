import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './login/login.component';
import { GaurdGuard } from './auth/gaurd.guard';

const routes: Routes = [
 
  { path: '', component: LoginComponent },
  { path: 'home', component: HeaderComponent, canActivate: [GaurdGuard]},
  {path: 'cart' , component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
