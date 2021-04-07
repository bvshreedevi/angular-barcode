import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NewCustomerService } from '../services/new-customer.service';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs';
import {Http, Response} from '@angular/http';
//import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  vocherForm: FormGroup;
  avaQuantity;
  grand;
  barin;
  results = [{ }];
  av_250;
  av_500;
  av_1000;
  posts;
  bardata;
  bars;

  constructor(private fb: FormBuilder,
    private apiService:NewCustomerService) {}

  ngOnInit() {
    this.vocherForm = this.fb.group({
      customer_name:['', Validators.required],
      alias_name: ['', Validators.required],
      //email: ['', Validators.required, Validators.email],
      email: ['', Validators.required],
      phone: '',
      website: '',
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country:['', Validators.required],
      pincode:['', Validators.required],
      contact_person:['', Validators.required],
      mobile:['', Validators.required],
      designation:'',
      pan:'',
      tan1:'',
      occasion:['', Validators.required],
      expiry_date:['', Validators.required],
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
    
    });
    
    this.apiService.availableQuantity()
    .subscribe((res : any) => {      
      this.avaQuantity = res;  
      this.av_250 = this.avaQuantity[0].two_fifty_quantity;
      this.av_500 = this.avaQuantity[0].five_hundred_quantity;
      this.av_1000 = this.avaQuantity[0].thousand_quantity;
      this.vocherForm.patchValue(
        {  
          av_quantity250: this.avaQuantity[0].two_fifty_quantity, 
          av_quantity500:this.avaQuantity[0].five_hundred_quantity,
          av_quantity1000:this.avaQuantity[0].thousand_quantity} 
        ) 
      
    });

    this.vocherForm.get("quantity250").valueChanges.subscribe(x => {
      
      this.vocherForm.patchValue(
      { two_fifty_total: x * 250,
        av_quantity250: this.av_250 - x
        
          }        
      )
 })

 this.vocherForm.get("quantity500").valueChanges.subscribe(x => {
  this.vocherForm.patchValue(
  { five_hundred_total: x * 500, av_quantity500: this.av_500 - x }        
  )
})  

this.vocherForm.get("quantity1000").valueChanges.subscribe(x => {
  this.vocherForm.patchValue(
  { thousand_total: x * 1000, av_quantity1000:this.av_1000 - x }        
  )
})
this.vocherForm.valueChanges.subscribe(x => {            
 
  this.grand = x.two_fifty_total + x.five_hundred_total + x.thousand_total;
  this.vocherForm.get("grand_total").setValue(this.grand, {onlySelf:true});
  
 })    

 //print
 this.barValues = [
  { id:1, barcode:'456398762013', denomination:250},
  { id:2, barcode:'512948203412', denomination:500},
  { id:2, barcode:'873425091429', denomination:1000}
];

}

  onSubmit(){
    //console.log(this.vocherForm.value);
     this.results = [{
      customer_name:this.vocherForm.value.customer_name,
      email:this.vocherForm.value.email,
      phone: this.vocherForm.value.phone,
      website: this.vocherForm.value.website,
      street: this.vocherForm.value.street,
      city: this.vocherForm.value.city,
      state: this.vocherForm.value.state,
      country:this.vocherForm.value.country,
      pincode:this.vocherForm.value.pincode,
      contact_person:this.vocherForm.value.contact_person,
      mobile:this.vocherForm.value.mobile,
      designation:this.vocherForm.value.designation,
      pan:this.vocherForm.value.pan,
      tan1:this.vocherForm.value.tan1,
      occasion:this.vocherForm.value.occasion,
      expiry_date:this.vocherForm.value.expiry_date,
      av_quantity250:this.vocherForm.value.av_quantity250,
      quantity250:this.vocherForm.value.quantity250,
      two_fifty_total:this.vocherForm.value.two_fifty_total,
      av_quantity500:this.vocherForm.value.av_quantity500,
      quantity500:this.vocherForm.value.quantity500,
      five_hundred_total:this.vocherForm.value.five_hundred_total,
      av_quantity1000:this.vocherForm.value.av_quantity1000,
      quantity1000:this.vocherForm.value.quantity1000,
      thousand_total:this.vocherForm.value.thousand_total,
      grand_total:this.vocherForm.value.grand_total
    }] 
    this.apiService.onSubmit(this.vocherForm.value)
    .subscribe((res:any) => {
      this.bardata = res;
      this.bardata.map(d => {
       // console.log(d);
      })
      console.log(this.bardata);
      console.log(JSON.stringify(res));
      this.getBar()
    },
       /* (data) =>  {
      this.barin = data;
      this.posts.push(this.barin),      
      console.log(this.barin); 
      console.log('data Json: ' + data)     
    } */
    (err) => console.log(err)); 
    this.vocherForm.reset();
  }
  
  //Barcodes
  getBar(){
    this.apiService.getBar().subscribe( 
      (data : any) => {
      this.bars = data;
      console.log(this.bars);
    })
  }
  //Print
  barValues;
  isPrinting = false;
 
  elementType = 'img';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#333';
  width = 2;
  height = 60;
  displayValue = true;
  fontOptions = '';
  font = 'arial';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 5;
  marginBottom = 5;
  marginLeft = 10;
  marginRight = 10;

  get values(): string[] {
    return this.value.split('\n');
  }

    codeList: string[] = [
    '', 'CODE128',
    'CODE128A', 'CODE128B', 'CODE128C',
    'UPC', 'EAN8', 'EAN5', 'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
    'pharmacode',
    'codabar'
  ];
}
