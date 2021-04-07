import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditCustomerService } from '../services/edit-customer.service';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  //editForm:FormGroup;
  form:FormGroup
  constructor(private fb:FormBuilder,    
    public dialogRef: MatDialogRef<EditCustomerComponent>,
    private service:EditCustomerService
    ) { }
    
  ngOnInit() {  
    this.form = this.fb.group({

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
    this.service.getCustomerReports();  

  }

  updateCustomer(){
    console.log(this.form.value);
    this.onClose();
  }

  cancel(){
    this.onClose();
  }
  onClose() {   
    this.dialogRef.close();
  }
}
