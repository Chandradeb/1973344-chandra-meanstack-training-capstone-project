import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {

  unlockMsg?:String;
  constructor(public unlockService:EmployeeService) { }

  ngOnInit(): void {
  }
  unlockUser(productRef:any){
    console.log(productRef);
    this.unlockService.unlockUser(productRef).subscribe((result:String)=>{
      this.unlockMsg=result;
    })
  }
}
