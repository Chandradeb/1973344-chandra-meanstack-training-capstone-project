import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { DeleteProductComponent } from './admin/delete-product/delete-product.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { DeleteemployeeComponent } from './admin/deleteemployee/deleteemployee.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { OrderStatusComponent } from './employee/order-status/order-status.component';
import { SendRequestsComponent } from './employee/send-requests/send-requests.component';
import { UserOrderStatusComponent } from './user/user-order-status/user-order-status.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { UserFundsComponent } from './user/user-funds/user-funds.component';
import { RaiseTicketComponent } from './user/raise-ticket/raise-ticket.component';
import { GeneratereportsComponent } from './admin/generatereports/generatereports.component';
import { ViewOrderStatusComponent } from './employee/view-order-status/view-order-status.component';
import { RefundComponent } from './employee/refund/refund.component';
import { ViewTicketComponent } from './employee/view-ticket/view-ticket.component';
import { UnlockUserComponent } from './employee/unlock-user/unlock-user.component';
import { DisplayItemsComponent } from './user/display-items/display-items.component';
import { OrderPlacedComponent } from './user/order-placed/order-placed.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    EmployeeMainComponent,
    AdminMainComponent,
    UserMainComponent,
    AdminDashboardComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewRequestsComponent,
    AddemployeeComponent,
    DeleteemployeeComponent,
    SigninComponent,
    SignupComponent,
    UserdashboardComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    OrderStatusComponent,
    SendRequestsComponent,
    UserOrderStatusComponent,
    EditProfileComponent,
    UserFundsComponent,
    RaiseTicketComponent,
    GeneratereportsComponent,
    ViewOrderStatusComponent,
    RefundComponent,
    ViewTicketComponent,
    UnlockUserComponent,
    DisplayItemsComponent,
    OrderPlacedComponent,
    ShoppingCartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {  
        positionClass:'top-left',  
        closeButton: true,  
          
      } 
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
