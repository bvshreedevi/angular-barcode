import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutherizationRoutingModule } from './autherization-routing.module';
//import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AutherizationRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class AutherizationModule { }
