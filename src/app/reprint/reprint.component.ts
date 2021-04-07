import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { NewCustomerService } from 'src/app/services/new-customer.service';

@Component({
  selector: 'app-reprint',
  templateUrl: './reprint.component.html',
  styleUrls: ['./reprint.component.css']
})
export class ReprintComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  mainGroup:FormGroup;
 
  constructor(private _formBuilder: FormBuilder,
    private apiService:NewCustomerService) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      last_name: ['', Validators.required],
      email: ['', Validators.required]
    });
    
    this.firstFormGroup.patchValue({
      first_name: 'shree'
    })
    this.firstFormGroup.get("first_name").valueChanges.subscribe(x => {
      console.log('firstname value changed')
      console.log(x)
   })
    this.mainG();
  }

  mainG(){
    this.mainGroup = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value     
    }
  }
 /*  submit(){
    console.log(this.firstFormGroup.value);
    console.log("submitted");
    this.mainGroup = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value     
    }
    console.log(this.mainGroup);
   
  } */

  submit(){
    this.mainGroup = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value     
    }
    //console.log(this.mainGroup);
    //console.log(this.user.getRawValue());
    this.apiService.submit(this.firstFormGroup.value + this.secondFormGroup.value)
        .subscribe( data => {
          //this.test = data;
          console.log(data);
          //this.router.navigate(['view']);
        });
  }
}
