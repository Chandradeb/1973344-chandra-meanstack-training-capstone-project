import { Component, OnInit } from '@angular/core';
import { Order } from "../../models/model.employee";
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-order-status',
  templateUrl: './view-order-status.component.html',
  styleUrls: ['./view-order-status.component.css']
})
export class ViewOrderStatusComponent implements OnInit {

  orders?:Array<Order>
  constructor(public Empser:EmployeeService) { }

  ngOnInit(): void {
    this.refreshpage();
  }
  refreshpage(){
    this.Empser.ViewOrderStatus().subscribe(result=>this.orders=result);
  }

}
