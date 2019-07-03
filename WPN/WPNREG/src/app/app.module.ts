
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from "@angular/forms";
import { HttpClient, HttpClientModule }from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponComponent } from './weapons/weapon/weapon.component';
import { WeaponListComponent } from './weapons/weapon-list/weapon-list.component';
import { WeaponService } from './shared/weapon.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    WeaponComponent,
    WeaponListComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
    
   
  ],
  providers: [WeaponService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


