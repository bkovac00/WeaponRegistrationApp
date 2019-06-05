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

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    WeaponComponent,
    WeaponListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [WeaponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
