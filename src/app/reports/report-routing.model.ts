import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { CustomerReportsComponent } from './customer-reports/customer-reports.component';
import { VoucherReportComponent } from './voucher-report/voucher-report.component';
import { RedemptionReportComponent } from './redemption-report/redemption-report.component';

const Reportroutes:Routes =[
    { path: 'reports', children:[
        {path: '', component:ReportsComponent},
        {path: 'customer-report', component:CustomerReportsComponent},
        {path: 'voucher-report', component:VoucherReportComponent},
        {path: 'redeem-report', component:RedemptionReportComponent}
      ]},    

];

@NgModule({
    imports:[RouterModule.forChild(Reportroutes)],
    exports:[RouterModule]
})

export class ReportRoutingModule {}