import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NewCustomerService } from '../services/new-customer.service';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs';
import { RedemptionService } from '../services/redemption.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  registrationForm: FormGroup;
  vouterDetails: FormGroup;
  //avaQuantity:[];
  avaQuantity: Array<any>;
  databar;
  reg;
  barcodes250 = [];
  q250;
  q500;
  q1000;
  barq25;
  constructor(private fb:FormBuilder,
    private apiService:NewCustomerService,
    private service:RedemptionService) { }

  ngOnInit() {

    //this.bar250();

    this.registrationForm = this.fb.group({
      customerDetails: this.fb.group({
        customer_name:['', Validators.required],
        alias_name: ['', Validators.required],      
        email: ['', Validators.required]     
      }),
      vouterDetails: this.fb.group({
        av_quantity250:'',
        quantity250:'',
        two_fifty_total:'',
        av_quantity500:'',
        quantity500:'',
        five_hundred_total:'',
        av_quantity1000:'',
        quantity1000:'',
        thousand_total:'',
        grand_total:''
        })
    });

    this.registrationForm.get("vouterDetails").patchValue(
      {  
        av_quantity500:'543', 
        av_quantity1000:'789'} 
      )

    this.registrationForm.get("vouterDetails.quantity250").valueChanges.subscribe(x => {
        this.registrationForm.get("vouterDetails").patchValue(
        { two_fifty_total: x * 250  }        
        )
   })

   this.registrationForm.get("vouterDetails.quantity500").valueChanges.subscribe(x => {
    this.registrationForm.get("vouterDetails").patchValue(
    { five_hundred_total: x * 500  }        
    )
  })  

  this.registrationForm.get("vouterDetails.quantity1000").valueChanges.subscribe(x => {
    this.registrationForm.get("vouterDetails").patchValue(
    { thousand_total: x * 1000 }        
    )
  })  
  this.registrationForm.get("vouterDetails").valueChanges.subscribe(x => {             
   console.log('Grand Total');
   console.log(x.two_fifty_total + x.five_hundred_total + x.thousand_total );
   /* this.q250 = x.quantity250;
   this.q500 = x.quantity500;
   this.q1000 = x.quantity1000;
   this.bars(this.q250, this.q500, this.q1000);   
   this.bar250();     */
}) 

/* this.apiService.availableQuantity()
    .subscribe( (data : any) => {
        this.avaQuantity = data;
        console.log(this.avaQuantity);
    }); */

    this.apiService.availableQuantity()
    .subscribe( (data : any) => {
      console.log(JSON.stringify(data));
      this.avaQuantity = data;
      console.log(typeof this.avaQuantity);
      console.log(this.avaQuantity['two_fifty_quantity']);
           
      
        if(data){
          this.registrationForm.get("vouterDetails.av_quantity250").patchValue
          (data.two_fifty_quantity);
        }
      
    });

   
   /* this.registrationForm.get("vouterDetails").valueChanges.subscribe(x => {
     x = this.registrationForm.get("vouterDetails").patchValue(
      { two_fifty_total: x.quantity250 * 250    }        
      )
    console.log('firstname value changed');
    console.log(x.quantity250 * 250);       
 }) */
   
 /*  this.barcodeTest(this.registrationForm.value).map(data => 
    {data
      
    });
    
  } */
  

  /* barcodeTest(barcode){      
       
        return this.databar;
  } */

}
submit(){
  console.log(this.registrationForm.value);
  this.barq25 = this.registrationForm.get('vouterDetails.quantity250').value;
  this.bar250(this.barq25);
  console.log('customer_name: ' + this.registrationForm.get('customerDetails.customer_name').value);
  //console.log('customer_name: ' + this.registrationForm.controls.customer_name.value);
  //console.log(this.registrationForm.get(this.voucherDetails.quantity250));
  this.apiService.submit(this.registrationForm.value).pipe(
    map(x =>
      {
        this.reg = x;
        console.log('registerForm' + this.reg);
        console.log('voucherDetails.quantity250' + this.reg.get('voucherDetails.quantity250'));
        
      })
  )
  //this.barcodeTest(this.registrationForm.value);
  /* this.apiService.submit(this.registrationForm.value)
      .subscribe( data => {
        //this.test = data;
        console.log(data);
        //this.router.navigate(['view']);
      }); */
}

bars(value250, value500, value1000){

  console.log('toatal 250: ' + typeof value250);
  console.log('toatal 500: ' + value500);
  console.log('toatal 1000: ' + value1000);
  for(let i = 1; i <= value250; i++){
    
    map((value250) => {
      console.log(value250);
    })
    /* var minm = 10000; 
    var maxm = 999999999999; 
    var digit250 = Math.floor(Math.random() * (maxm - minm + 1)) + minm; 
    this.barcodes250.push(digit250);
    console.log(this.barcodes250); */
  }
}

bar250(value){  
  
  for(let i = 1; i <= value; i++){  
    let expdate = this.registrationForm.get('customerDetails.customer_name').value;
    let minm = 10000; 
    let maxm = 999999999999; 
    var digit250 = Math.floor(Math.random() * (maxm - minm + 1)) + minm; 
    /* this.barcodes250.push(digit250);
    console.log('250 barcodes array: '+ this.barcodes250); */    

  }
  this.service.getRedeem().subscribe(
    (data: any[]) => data.map((item: any) => {
    console.log(item);
      if(value === item.barcode_number){
        if(this.barcodes250.indexOf(value) === -1) {
          this.barcodes250.push(digit250);
          console.log('250 barcodes array: '+ this.barcodes250);
        }
      }
    })
  )
}

}