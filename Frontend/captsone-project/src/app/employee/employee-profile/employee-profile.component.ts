import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  updateMsg?:String;
  constructor(public emplService:EmployeeService) { }

  ngOnInit(): void {
  }
  updatePwd(productRef:any){
    console.log(productRef);
    this.emplService.updatePwd(productRef).subscribe((result:String)=>{
    this.updateMsg=result;
    });
  }

}
