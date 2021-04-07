import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedemptionService {

  baseUrl = 'http://localhost/angular/mantri3';

  constructor(private http:HttpClient) { }

  getRedeem(){
    return this.http.get(this.baseUrl + '/getRedeem.php');
  }
}
