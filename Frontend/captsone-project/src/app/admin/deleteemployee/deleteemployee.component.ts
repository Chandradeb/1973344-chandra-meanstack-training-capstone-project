import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
  deleteData:any={};
  constructor(
    public adminService:AdminService,
    public toastr:ToastrService,
    public router:Router
  ) { }
  ngOnInit(): void {
  }

  deleteEmployees(email:any){
    if(email===""){
      this.toastr.error("Please fill up the required fields", 'Error', {
        timeOut: 2000,
      });
    }else{
      this.adminService.deleteEmployee(email).subscribe(result=>{
        console.log(result)
        if(this.deleteData.success){
          this.toastr.success(this.deleteData.msg, 'Success', {
            timeOut: 2000,
          });
        }else{
          this.toastr.error(this.deleteData.msg, 'Error', {
            timeOut: 2000,
          });  
        }
      })
    }
  }
}
