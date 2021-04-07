import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ExistingCustomerComponent } from './existing-customer/existing-customer.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { ReportsComponent } from './reports/reports.component';
import { VoucherQuantityComponent } from './voucher-quantity/voucher-quantity.component';
import { ReprintComponent } from './reprint/reprint.component';
import { ShopsComponent } from './shops/shops.component';
import { AccountManagerComponent } from './autherization/account-manager/account-manager.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './autherization/register/register.component';
import { LoginComponent } from './autherization/login/login.component';
import { Authguard } from './services/authguard';
import { Test2Component } from './test2/test2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Test3Component } from './test3/test3.component';
import { MaterialModule } from './material/material.module';


const routes:Routes =[
    { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'home', canActivate: [Authguard], component:HomeComponent},
    { path: 'new-customer', component:NewCustomerComponent},
    { path: 'existing-customer', component:ExistingCustomerComponent},
    { path: 'redemption', component:RedemptionComponent},
    
    //{path: 'customer-report', component:CustomerReportsComponent},
    { path: 'voucher-quantity', component:VoucherQuantityComponent},
    { path: 'reprint', component:ReprintComponent},
    { path: 'shop', component:ShopsComponent},
    { path: 'account', component:AccountManagerComponent},
    
    { path: 'test', component:TestComponent},
    { path: 'test2', component:Test2Component},
     { path: 'test3', component:Test3Component},
    /* {
        path:'register',
        loadChildren:'./autherization/autherization.module#AutherizationModule'
    } */ 
    {
        path:'register',
        component:RegisterComponent
      
      }, {
        path:'login',
        component:LoginComponent
      }  ,
      { path:'**', component:PageNotFoundComponent} 

];

@NgModule({
    imports:[RouterModule.forRoot(routes), MaterialModule],
    exports:[RouterModule]
})

export class AppRoutingModule {}
export const Regsiter_components = [HomeComponent];