import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/model/user';

export interface shop {
  shopName: string;    
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http:HttpClient) { }
  
  baseUrl = 'http://localhost/angular/mantri3';

  shopSubmit(shopForm:shop ){
    return this.http.post(this.baseUrl + '/shop.php', shopForm)
  }
  shopNames(){
    return this.http.get(this.baseUrl + '/shop-names.php');
  }

  getBar(){
    return this.http.get(this.baseUrl + '/getBar.php');
  }
}
