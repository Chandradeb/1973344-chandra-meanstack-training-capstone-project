import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { DeleteProductComponent } from './admin/delete-product/delete-product.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';

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
    ViewRequestsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
