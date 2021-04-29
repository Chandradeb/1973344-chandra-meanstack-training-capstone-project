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

  back(){
    this.router.navigate(["main-page"]);
  }

  checkEmployee():void{
    const employee={
      email:this.signInRef.value.email,
      pass:this.signInRef.value.pass
    }
    this.empService.signIn(employee).subscribe(data =>{
      this.signInData=data;
      if(this.signInData.success){
        //print successful sign in messsage
        this.toastr.success('Successfully Signed In', 'Success', {
          timeOut: 2000,
        });

        //token for employee login
        sessionStorage.setItem('employeeSignedIn', 'true');

        //user information for using to edit profile
        sessionStorage.setItem('employeeDetails', JSON.stringify(this.signInData.employee));

        //navigate tp employee dashboard
        this.router.navigate(['employee-dashboard']);
      }else{
        //print error message for wrong credentials
        this.toastr.error(this.signInData.msg, 'Error', {
          timeOut: 2000,
        });

        //route back to employee-main
        this.router.navigate(['employee-main']);
      }
    });

  }

}
