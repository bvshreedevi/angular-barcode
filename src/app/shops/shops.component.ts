import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ServiceService } from '../services/service.service';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'shop_name'];
  
  listData: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;
  shopForm:FormGroup;
  shops;
  constructor(private fb:FormBuilder,
    private service:ServiceService) { }

  ngOnInit() {
    this.shopForm = this.fb.group({
      shopName:['', Validators.required]
    });

    this.service.shopNames().subscribe( 
      (data : any) => {
        this.shops = data;       
        this.listData = new MatTableDataSource(this.shops);
        this.listData.paginator = this.paginator;
        this.listData.sort = this.sort;
      });
  }

  shopSubmit(){
    console.log(this.shopForm.value);
    this.service.shopSubmit(this.shopForm.value)
      .subscribe( data => {
        if(data){
        console.log("Shop added");
        }
        //this.router.navigate(['view']);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();

    if (this.listData.paginator) {
      this.listData.paginator.firstPage();
    }
  }
  
}
