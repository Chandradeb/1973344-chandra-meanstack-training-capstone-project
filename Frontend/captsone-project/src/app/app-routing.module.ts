import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserMainComponent } from './user/user-main/user-main.component';

const routes: Routes = [
  {path: "main-page", component: MainPageComponent},
  {path: "user-main", component: UserMainComponent},
  {path: "employee-main", component: EmployeeMainComponent},
  {path: "admin-main", component: AdminMainComponent},
  {path:"",redirectTo:"\main-page",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
