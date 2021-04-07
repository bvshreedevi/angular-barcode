import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../shared/model/register';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/index';

import { ApiResponse } from '../shared/model/api-response';

@Injectable({
  providedIn: 'root'
})
export class AutherizationService {
  
  baseUrl = 'http://localhost/angular/mantri3';
  decodedToken: any;
  isUserLogged = false;
  //currentUser: User;

  constructor(private http:HttpClient) { }

  register(registerForm:Register){
    return this.http.post(this.baseUrl + '/register.php', registerForm);
  }
  login(loginForm: any) {
    return this.http.post<any>(this.baseUrl + "/login.php", loginForm)
  }
 
  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  
  isUserLoggedin(){
    return this.isUserLogged;
  }
  
  logoutUser() {
    localStorage.removeItem('token')
    //this.router.navigate(['/events'])
  }

}
