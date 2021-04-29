import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  updateStat?:String;

  constructor(public statusService:EmployeeService) { }

  ngOnInit(): void {
  }
  updatestatus(productRef:any){
    console.log(productRef);
    this.statusService.updatestatus(productRef).subscribe((result:String)=>{
      this.updateStat=result;
    });
  }
}
