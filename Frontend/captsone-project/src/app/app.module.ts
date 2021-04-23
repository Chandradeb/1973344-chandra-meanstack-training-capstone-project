import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMainComponent } from './user-main/user-main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { AdminMainComponent } from './admin-main/admin-main.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMainComponent,
    MainPageComponent,
    EmployeeMainComponent,
    AdminMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
