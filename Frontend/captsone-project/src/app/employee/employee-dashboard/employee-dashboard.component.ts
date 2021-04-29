import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  sendRequest(){
    this.router.navigate(['send-requests']);
  }

  updateOrderStatus(){
    this.router.navigate(['order-status']);
  }

  unlockUsers(){
    this.router.navigate(['view-ticket']);
  }

  editProfile(){
    this.router.navigate(['employee-profile']);
  }
}
