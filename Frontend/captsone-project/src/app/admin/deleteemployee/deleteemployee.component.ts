import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {

  constructor(public adminService:AdminService) { }
  deleteMsg?:string
  ngOnInit(): void {
  }
  deleteEmployees(id:any){
    console.log("id is "+id);
     this.adminService.deleteEmployee(id).subscribe((result:string)=> {
         this.deleteMsg=result;
     })
   }
}
