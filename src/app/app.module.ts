import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './module/side-nav/side-nav.component';
import { MainComponent } from './module/main/main.component';
import { TopWidgetsComponent } from './module/top-widgets/top-widgets.component';
import { SalesByCatagoryComponent } from './module/year/sales-by-catagory.component';
import { LastFewTransactionsComponent } from './module/month-based-revenue/last-few-transactions.component';
import { TopThreeProductsComponent } from './module/location/top-three-products.component';
import { SalesByMonthComponent } from './module/billoccurance/sales-by-month.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts'; 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ModuleComponent } from './module/module.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerdetailsComponent } from './module/customer/customerdetails.component';
import { ProfileComponent } from './module/profile/profile.component';
import { PaymentComponent } from './module/payment/payment.component';
import { TimingComponent } from './module/timing/timing.component';
import { ComplaintsComponent } from './module/complaints/complaints.component';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,TopWidgetsComponent,LastFewTransactionsComponent,TopThreeProductsComponent,ProfileComponent,PaymentComponent,
   
  SalesByCatagoryComponent,
  
    SalesByMonthComponent,
    HomecomponentComponent,
    ModuleComponent,
    CustomerdetailsComponent,
  TimingComponent,
  ComplaintsComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FontAwesomeModule,FormsModule,NgxChartsModule,CanvasJSAngularChartsModule,HttpClientModule,DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
