import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/model/user';
import { Headers, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators'; 
/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'; */

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private http:HttpClient) { }
  baseUrl = 'http://localhost/angular/mantri3';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
 /* newVoucher(userDetails: User){
    return this.http.post(this.baseUrl + '/insert.php', user);
  }*/

  submitForm(userDetails: User){
    return this.http.post(this.baseUrl + '/insert.php', userDetails);
  }
  availableQuantity(){
    return this.http.get(this.baseUrl + '/list.php');
  }

  /* submit(addForm: User){
    return this.http.post(this.baseUrl + '/insert.php', addForm);
  } */

  submit(mainGroup: User){
    return this.http.post(this.baseUrl + '/insert.php', mainGroup);
  }
  onSubmit(vocherForm: User){
    return this.http.post(this.baseUrl + '/barcode1.php', vocherForm, this.httpOptions);
    /* let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + '/barcode1.php', vocherForm, this.httpOptions)
    .map(this.extractData)
    .catch(this.handleErrorObservable);  */
  }
  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  } 
  getBar(){
    return this.http.get(this.baseUrl + '/getBar.php');
  }
}
