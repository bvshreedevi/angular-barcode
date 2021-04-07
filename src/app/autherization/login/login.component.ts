import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AutherizationService } from 'src/app/services/autherization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  invalidLogin: boolean = false;
  
  constructor(private fb: FormBuilder, 
              private apiService:AutherizationService,
              private router:Router) {
   
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],      
      password: ['', [Validators.required]]      
    })

  }

  login () {
    this.apiService.login(this.loginForm.value)
    .subscribe(
      res => {
        console.log(res.token);
        window.localStorage.setItem('token', res.token);
        this.router.navigate(['home'])
      },
      err => {console.log("err")}
    ) 
  }
    

  }


