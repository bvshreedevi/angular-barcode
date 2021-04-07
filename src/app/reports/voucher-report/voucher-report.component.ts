import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-voucher-report',
  templateUrl: './voucher-report.component.html',
  styleUrls: ['./voucher-report.component.css']
})
export class VoucherReportComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'alias', 'barcode', 'denomination', 'issued_date', 
  'issued_time', 'expiry_date', 'issued_by', 'occasion', 'status', 'shopname', 'redemno', 'redeem_date', 'redeem_employee'];
  
  listData: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;
  
  constructor(private report:ReportsService) { }
  vouchers;
  ngOnInit() {
    this.report.getVoucherReports().subscribe( 
      (data : any) => {
        this.vouchers = data;       
        this.listData = new MatTableDataSource(this.vouchers);
        this.listData.paginator = this.paginator;
        this.listData.sort = this.sort;
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
