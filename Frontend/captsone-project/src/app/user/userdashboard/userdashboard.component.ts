import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  StartShopping(){

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
