import { EmployeeAuthGuard } from './guards/employee-auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { DeleteemployeeComponent } from './admin/deleteemployee/deleteemployee.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeMainComponent } from './employee/employee-main/employee-main.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { EmployeeAuth2Guard } from './guards/employee-auth2.guard';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { OrderStatusComponent } from './employee/order-status/order-status.component';
import { SendRequestsComponent } from './employee/send-requests/send-requests.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserAuth2Guard } from './guards/user-auth2.guard';
import { UserOrderStatusComponent } from './user/user-order-status/user-order-status.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { UserFundsComponent } from './user/user-funds/user-funds.component';
import { RaiseTicketComponent } from './user/raise-ticket/raise-ticket.component';
import { GeneratereportsComponent } from './admin/generatereports/generatereports.component';
import { ViewTicketComponent } from './employee/view-ticket/view-ticket.component';
import { ViewOrderStatusComponent } from './employee/view-order-status/view-order-status.component';
import { RefundComponent } from './employee/refund/refund.component';
import { DisplayItemsComponent } from './user/display-items/display-items.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { OrderPlacedComponent } from './user/order-placed/order-placed.component';

const routes: Routes = [
  { path: "main-page", component: MainPageComponent, canActivate: [EmployeeAuth2Guard, UserAuth2Guard]},
  { path: "user-main", component: UserMainComponent, canActivate: [UserAuth2Guard]},
  { path: "employee-main", component: EmployeeMainComponent, canActivate: [EmployeeAuth2Guard]},
  { path: "admin-main", component: AdminMainComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },
  { path: "addemployee", component:AddemployeeComponent},
  { path: "deleteemployee", component:DeleteemployeeComponent},
  { path: "signup", component:SignupComponent},
  { path: "signin", component:SigninComponent, canActivate: [UserAuth2Guard]},
  { path: "userdashboard", component:UserdashboardComponent, canActivate: [UserAuthGuard]},
  { path: "employee-dashboard", component: EmployeeDashboardComponent, canActivate: [EmployeeAuthGuard]},
  { path: "employee-profile", component: EmployeeProfileComponent, canActivate: [EmployeeAuthGuard]},
  { path: "order-status", component: OrderStatusComponent, canActivate: [EmployeeAuthGuard]},
  { path: "send-requests", component: SendRequestsComponent, canActivate: [EmployeeAuthGuard]},
  { path: "user-order-status", component: UserOrderStatusComponent},
  { path: "edit-profile", component: EditProfileComponent},
  { path: "user-funds", component: UserFundsComponent},
  { path: "raise-ticket", component: RaiseTicketComponent},
  { path: "generatereports", component:GeneratereportsComponent},
  { path: "view-ticket", component:ViewTicketComponent},
  { path: "view-order", component: ViewOrderStatusComponent},
  { path:"Refund",component:RefundComponent },
  { path:"displayItems", component: DisplayItemsComponent},
  { path:"shoppingCart", component:ShoppingCartComponent},
  { path:"orderPlaced", component:OrderPlacedComponent},
  { path: "", redirectTo: "\main-page", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
