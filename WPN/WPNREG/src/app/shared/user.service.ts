import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

 
@Injectable( {providedIn: 'root'})
export class UserService {
  formData : User;
  list : User[];

  readonly rootURL = 'http://localhost:53691/api';
  constructor(private http: HttpClient) { }
 
  postUser(formData:User){
    return this.http.post(this.rootURL+'/Login',formData);

  }
  refreshList(){
    this.http.get(this.rootURL+'/Login')
    .toPromise().then(res => this.list = res as User[]);
  }

  putUser(formData : User){
    
    return this.http.put(this.rootURL+'/Login/'+formData.USR_ID,formData);
     
  }

  deleteUser(id : number){
    return this.http.delete(this.rootURL+'/Login/'+id);
  }

  getUser() {
    return this.http.get(this.rootURL + '/Login');
  }
}