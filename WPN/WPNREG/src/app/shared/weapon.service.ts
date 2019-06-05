import { Injectable } from '@angular/core';
import { Weapon } from './weapon.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WeaponService {

formData : Weapon;
list : Weapon[];
readonly rootURL ="http://localhost:53691/api"



  constructor(public http : HttpClient) { }

  postWeapon(formData:Weapon){
    return this.http.post(this.rootURL+'/Weapon',formData);

  }
  refreshList(){
    this.http.get(this.rootURL+'/Weapon')
    .toPromise().then(res => this.list = res as Weapon[]);
  }

  putWeapon(formData : Weapon){
    
    return this.http.put(this.rootURL+'/Weapon/'+formData.WPN_ID,formData);
     
   }

   deleteWeapon(id : number){
    return this.http.delete(this.rootURL+'/Weapon/'+id);
   }

   getWeapons() {
    return this.http.get(this.rootURL + '/Weapon');
  }
}
