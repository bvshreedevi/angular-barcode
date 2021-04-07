import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
//import { Regsiter_components } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './autherization/login/login.component';
import { AccountManagerComponent } from './autherization/account-manager/account-manager.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { ReportsComponent } from './reports/reports.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { ShopsComponent } from './shops/shops.component';
import { ReprintComponent } from './reprint/reprint.component';
import { VoucherQuantityComponent } from './voucher-quantity/voucher-quantity.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { CustomerReportsComponent } from './reports/customer-reports/customer-reports.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ReportRoutingModule } from './reports/report-routing.model';
import { VoucherReportComponent } from './reports/voucher-report/voucher-report.component';
import { RedemptionReportComponent } from './reports/redemption-report/redemption-report.component';
//import {  RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RegisterComponent } from './autherization/register/register.component';
import { AutherizationService } from './services/autherization.service';
import { Authguard } from './services/authguard';
import { Test2Component } from './test2/test2.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Test3Component } from './test3/test3.component';
import {NgxPrintModule} from 'ngx-print';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,    
    LoginComponent,
    AccountManagerComponent,
    NewCustomerComponent,
    ExistingCustomerComponent,
    ReportsComponent,
    RedemptionComponent,
    ShopsComponent,
    ReprintComponent,
    VoucherQuantityComponent,
    TestComponent,
    CustomerReportsComponent,
    EditCustomerComponent,
    VoucherReportComponent,
    RedemptionReportComponent,    
    Test2Component,
    PageNotFoundComponent,
    Test3Component,
    //Regsiter_components,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReportRoutingModule,
    NgxBarcodeModule,
    NgxPrintModule,
    
   // RxReactiveFormsModule
  ],
  providers: [AutherizationService, Authguard],
  bootstrap: [AppComponent],
  entryComponents:[EditCustomerComponent]
})
export class AppModule { }
