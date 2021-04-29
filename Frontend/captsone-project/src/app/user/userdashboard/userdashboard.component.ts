import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  userDetails:any={}
  constructor(public router: Router, public userService: UserService) { }

  ngOnInit(): void {
    this.userDetails=JSON.parse(sessionStorage.getItem("userDetails") || "{}")
    //Update username in user.service
    this.userService.usrName=this.userDetails.userName;
  }

  StartShopping(){
    this.router.navigate(['displayItems'])
  }

  OrderStatus(){
    this.router.navigate(['user-order-status'])
  }

  EditProfile(){
    this.router.navigate(['edit-profile'])
  }

  Funds(){
    this.router.navigate(['user-funds'])
  }
}
