import { EmployeeAuthService } from './services/employee-auth.service';
import { Component } from '@angular/core';
import { AdminAuthService } from './services/admin-auth.service';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'captsone-project';

  constructor(
    public adminAuthService: AdminAuthService, 
    public employeeAuthService:EmployeeAuthService,
    public userAuthService:UserAuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    if(this.adminAuthService.isAdminLoggedIn()){
      this.adminAuthService.adminLogout();
    }else if(this.employeeAuthService.isEmployeeLoggedIn()){
      this.employeeAuthService.employeeLogOut();
    }else if(this.userAuthService.isUserLoggedIn()){
      this.userAuthService.userLogOut();
    }
  }
}
