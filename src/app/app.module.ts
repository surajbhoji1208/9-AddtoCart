import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { SlidingComponent } from './components/header/sliding/sliding.component';
import { RoundPipe } from './pipe/round.pipe';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    SlidingComponent,
  
    RoundPipe,
       FooterComponent,
    LoginComponent,
    SearchPipe
      

     
 
 
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatButtonModule,MatIconModule,MatBadgeModule,HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
