import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { UpdateCustomer } from '../shared/model/update-customer';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EditCustomerService {
  
  constructor(private http:HttpClient,
    private fb:FormBuilder) { }

    form:FormGroup = this.fb.group({

      customer_name:['', Validators.required],
      alias_name: [''],
      //email: ['', Validators.required, Validators.email],
      email: ['', Validators.required],
      phone: '',
      website: '',
      contact_person:['', Validators.required],
      mobile:['', Validators.required],
      designation:'',      
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country:['', Validators.required],
      pincode:['', Validators.required]
    
  });

  baseUrl = 'http://localhost/angular/mantri3';

  getCustomerReports(){
    return this.http.get(this.baseUrl + '/customer-report.php');
  }
  
   updateCustomer(form){
    return this.http.post(this.baseUrl + '/update-customer.php', form);
  }

  populateForm(customers) {
    this.form.setValue(customers);
  }
}
