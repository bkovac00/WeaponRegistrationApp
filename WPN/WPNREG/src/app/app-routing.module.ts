import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import {AboutComponent} from './pages/about/about.component';  
import {ContactComponent} from './pages/contact/contact.component';  
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { WeaponsComponent } from './weapons/weapons.component';
  
const routes: Routes = [  
{path: '',component:HomeComponent},
{path: 'home',component:HomeComponent},
{path: 'weapons',component:WeaponsComponent},
{path: 'sign-up',component: SignUpComponent},  
{path: 'about',component: AboutComponent},  
{path: 'contact',component: ContactComponent},  
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  