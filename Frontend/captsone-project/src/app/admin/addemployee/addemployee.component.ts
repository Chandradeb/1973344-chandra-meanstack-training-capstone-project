import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }
  signup(employeeRef:any){
    console.log(employeeRef);
    this.adminService.Signup(employeeRef);
  }
}
