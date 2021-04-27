import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {
  signInRef = new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
  });
  signInData:any={};

  constructor(
    public empService:EmployeeService,
    public toastr:ToastrService,
    public router:Router
    ) { }

  ngOnInit(): void {
    
  }

  checkEmployee():void{
    const employee={
      email:this.signInRef.value.email,
      pass:this.signInRef.value.pass
    }
    this.empService.signIn(employee).subscribe(data =>{
      this.signInData=data;
      if(this.signInData.success){
        this.toastr.success('Successfully Signed In', 'Success', {
          timeOut: 2000,
        });
        sessionStorage.setItem('employeeSignedIn', 'true');
        sessionStorage.setItem('employeeDetails', JSON.stringify(this.signInData.employee));
        this.router.navigate(['employee-dashboard']);
      }else{
        this.toastr.error(this.signInData.msg, 'Error', {
          timeOut: 2000,
        });
        this.router.navigate(['employee-main']);
      }
    });

  }

}
