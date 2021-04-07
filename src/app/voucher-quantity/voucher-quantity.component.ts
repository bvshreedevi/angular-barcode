import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoucherQuantityService } from '../services/voucher-quantity.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-voucher-quantity',
  templateUrl: './voucher-quantity.component.html',
  styleUrls: ['./voucher-quantity.component.css']
})
export class VoucherQuantityComponent implements OnInit {

  quantityFormGroup:FormGroup;
  voucherQuantity = [];
  avaQuantity;
  av_250;
  av_500;
  av_1000;

  constructor(private fb: FormBuilder,
    private quantityService:VoucherQuantityService) {}

  ngOnInit() {
    this.quantityFormGroup = this.fb.group({
      new250:'',
      new500:'',
      new1000:'',     
      occasion:'',
      //dateOfQuantity:'new Date()',
      role:'Info Desk',
      employee:'shreedevi'
    });

    this.quantityService.getAvailableVouchers().subscribe(
      res => {
        this.avaQuantity = res;  
        this.av_250 = this.avaQuantity[0].two_fifty_quantity;
        this.av_500 = this.avaQuantity[0].five_hundred_quantity;
        this.av_1000 = this.avaQuantity[0].thousand_quantity;
      }
    );

    this.quantityService.getVoucherQuantity().subscribe(
      (data: any[]) => {data.map((item: any) => {
            //console.log(item);     
          
            this.voucherQuantity.push(item);
            //console.log(this.voucherQuantity);   
                    
      })
      
      })
      this.addQuantity();
    
    //
    /* .subscribe(
      resp => {        
        //this.voucherQuantity = resp[];
        this.voucherQuantity.push(resp);
        console.log(this.voucherQuantity);        
      }
    ); */
    
  }
  
  addQuantity(){
    console.log('addQuantity:'+ this.voucherQuantity);
     for(let i=0; i<=this.voucherQuantity.length; i++){
      console.log('addQuantity For: ' + this.voucherQuantity[i]);
    } 
  }
  quantitySubmit(){
    console.log(this.quantityFormGroup.value);        
    this.quantityService.quantitySubmit(this.quantityFormGroup.value)
      .subscribe( data => {
        if(data){
        console.log("dataa");
        }
        this.quantityFormGroup.reset();
        //this.router.navigate(['view']);
      });
  }
}
