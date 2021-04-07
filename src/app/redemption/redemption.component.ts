import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RedemptionService } from '../services/redemption.service';
import { map } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.component.html',
  styleUrls: ['./redemption.component.css']
})
export class RedemptionComponent implements OnInit {
  redeemSearch: FormGroup;
  redeemList: FormGroup;
  barcode:FormControl;
  barcodes = [];
  barValues:any;
  mapV:any;
  form: FormGroup;
  shops:any;
  creds:any;
  scannedVouchers:any;
  denom:number = 0;
  countDenom500:number = 0;
  count500:number;
  total500:number = 0;
  barcTest;

  constructor(private fb:FormBuilder,
    private service:RedemptionService,
    private shopService:ServiceService) { }

  
  ngOnInit() {   

    this.redeemSearch = this.fb.group({
      barcode:''
    })

    this.redeemSearch.get("barcode").valueChanges.subscribe(selectedValue => {
      console.log('barcode changed')      
      console.log(selectedValue) 
      this.barSearch(selectedValue)
    })    

    this.form = this.fb.group({  
      shop:['', Validators.required],    
      vouchers: this.fb.array([]),
    });
  
    this.shopService.shopNames().subscribe( 
      (data : any) => {
        this.shops = data;             
      });
  }

  addCreds(values:any) {
    this.creds = this.form.controls.vouchers as FormArray;
   
    
      this.creds.push(this.fb.group({
        id: [values.id, Validators.required],
        customer_name: [values.customer_name, Validators.required],
        barcode_number: [values.barcode_number, Validators.required],
        denomination: [values.denomination, Validators.required]
      }));
  
  }
  redeem(){
    console.log(this.form.value);
  }
  

  barSearch(value){
  this.service.getRedeem().subscribe(
      (data: any[]) => data.map((item: any) => {
      
        if(value === item.barcode_number){
          if(this.barcodes.indexOf(value) === -1) {
            this.barcodes.push(value);
            console.log(this.barcodes);
            this.addCreds(item);            
          } 
          else{
            console.log('already exists') ;
          }
          
         /*  console.log(item.barcode_number);
          this.barcodes.push(value); */
        
        }
    })
  )
}


  scanned(){
    this.scannedVouchers = this.barcodes.length;
    console.log('scanned : '+ this.barcodes.length);
    this.barcodes.map(x => {
      this.denom = this.denom + +x.denomination;
      console.log('In Scanned method ' + this.denom)
    })
    
  }

  submitR(){
    
  }
}
