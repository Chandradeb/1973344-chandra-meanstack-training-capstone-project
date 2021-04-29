import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {
  orderStatus:any= {}
  constructor(
    public userService:UserService
  ) { }

  ngOnInit(): void {
    this.getOrderStatus();
  }

  getOrderStatus(){
    let str =sessionStorage.getItem("userDetails");
    let result = JSON.parse(str || '{}');
    this.userService.getOrderStatus(result!.userName).subscribe(data=>{
      this.orderStatus = data;
      console.log(this.orderStatus.order);
    })
  }

}
