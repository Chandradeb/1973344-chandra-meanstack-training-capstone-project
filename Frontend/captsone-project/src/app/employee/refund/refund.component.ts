import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

    RefundMsg?:String;

    constructor(public userServ:EmployeeService) { }

    ngOnInit(): void {
    }

    refund(productRef:any){
      this.userServ.refund(productRef).subscribe((result:String)=>{
        this.RefundMsg= result ;
    });
  }

}
