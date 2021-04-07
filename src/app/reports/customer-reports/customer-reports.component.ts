import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ReportsService } from 'src/app/services/reports.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material";
import { EditCustomerComponent } from 'src/app/edit-customer/edit-customer.component';
import { HomeComponent } from 'src/app/home/home.component';
import { EditCustomerService } from 'src/app/services/edit-customer.service';

@Component({
  selector: 'app-customer-reports',
  templateUrl: './customer-reports.component.html',
  styleUrls: ['./customer-reports.component.css']
})
export class CustomerReportsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'alias', 'email', 'phone', 'website', 'street', 
  'city', 'state', 'country', 'pincode', 'contact_person', 'designation', 'mobile', 'pan', 'tin', 'actions'];
  listData: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;

  constructor(private report:ReportsService,
    private dialog: MatDialog,
    private service:EditCustomerService) {   
  }

  customers;
  ngOnInit() {  

    this.service.getCustomerReports()
    .subscribe( (data : any) => {
        this.customers = data;       
        this.listData = new MatTableDataSource(this.customers);
        this.listData.paginator = this.paginator;
        this.listData.sort = this.sort;
    });
        

  }

  /* applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  } */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();

    if (this.listData.paginator) {
      this.listData.paginator.firstPage();
    }
  }
 /*  onNoClick(): void {
    this.dialogRef.close();
  } */
 

 

  onEdit(row){
    //this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EditCustomerComponent,dialogConfig);
  }

}


