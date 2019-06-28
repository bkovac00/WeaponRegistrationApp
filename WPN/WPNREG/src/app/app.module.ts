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
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';

  
    

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    WeaponComponent,
    WeaponListComponent,
    SignUpComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [WeaponService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }

