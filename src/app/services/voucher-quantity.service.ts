import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoucherQuantity } from '../shared/model/voucher-quantity';

@Injectable({
  providedIn: 'root'
})
export class VoucherQuantityService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost/angular/mantri3';

  quantitySubmit(quantityFormGroup: VoucherQuantity){
    return this.http.post(this.baseUrl + '/voucher_quantity.php', quantityFormGroup);
  }

  getAvailableVouchers(){
    return this.http.get(this.baseUrl + '/available_quantity.php');
  }

  getVoucherQuantity(){
    return this.http.get(this.baseUrl + '/get-voucher-quantity.php');
  }



}
