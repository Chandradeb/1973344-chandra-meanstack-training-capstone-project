import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-send-requests',
  templateUrl: './send-requests.component.html',
  styleUrls: ['./send-requests.component.css']
})
export class SendRequestsComponent implements OnInit {

  reqMsg?:String
  constructor(public empService:EmployeeService ) { }
  ngOnInit(): void {
  }
  storerequest(productRef:any){
    console.log(productRef);
    this.empService.storerequestDetails(productRef).subscribe((result:String)=>{
      this.reqMsg= result ;
      

    });
  }

}
