import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  bars:any;
  constructor(private service:ServiceService) { }
 

  ngOnInit() {
    this.getBar();
  }

  
  getBar(){
    this.service.getBar().subscribe( 
      (data : any) => {
      this.bars = data;
      console.log(this.bars);
    })
  }

}
