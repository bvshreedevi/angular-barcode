import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AutherizationService } from 'src/app/services/autherization.service';

/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();
  message = '';
  errorMsg ='';

  constructor(private fb: FormBuilder, 
              private apiService:AutherizationService) {
   
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email:['', [Validators.required]],
      role:['', [Validators.required]],
      password: ['', [Validators.required]],
      verifyPassword: ''
    }, {
      validator: this.passwordValidator
    })
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('verifyPassword').value;

    return condition ? { passwordsDoNotMatch: true} : null;
  }
  
  register(){
    
    
    this.apiService.register(this.registerForm.value)
        .subscribe( res => {         
          this.message = 'Registered Successfully!';
          this.registerForm.reset()
          this.initializeFormGroup();
        },
        err => {
          this.message = 'Not Registered';
        }        
        
        );
  }

  clear(){
    this.registerForm.reset()
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.registerForm.setValue({      
      username: '',
      email:'',
      role:'',
      password: '',
      verifyPassword: ''
    });
  }

}
