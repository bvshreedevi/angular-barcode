import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost/angular/mantri3';

  getCustomerReports(){
    return this.http.get(this.baseUrl + '/customer-report.php');
  }

  getVoucherReports(){
    return this.http.get(this.baseUrl + '/voucher-report.php');
  }

  getRedeemReports(){
    return this.http.get(this.baseUrl + '/redeem-report.php');
  }

  /* populateForm(User){
    this.form.setValue(_.omit(User));
  } */
}
