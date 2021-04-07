import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      'personalDetails': this.fb.group({
        'firstCtrl': ''        
      }),
      'contactDetails': this.fb.group({
        'secondCtrl': ''        
      })
    });
    this.registrationForm.get("contactDetails.secondCtrl").valueChanges.subscribe(x => {
      this.registrationForm.get("contactDetails").patchValue(
      { thousand_total: x * 1000 }        
      )
    })  
  }

  submitR(){
    console.log(this.registrationForm.value)
  }

}
