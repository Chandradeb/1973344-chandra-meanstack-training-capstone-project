import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AdminService } from 'src/app/services/admin.service';
//import {toastr} from '@angular/core'
//import {ToastrModule} from 'ngx-toastr'
import { ToastrService } from 'ngx-toastr'; 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInData:any={}
  
  
  constructor(public userService:UserService, public router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  signin(userRef:any){
   
    
     this.userService.signin(userRef).subscribe(result=>{
    
    this.signInData = result;
    if(this.signInData.success){
      this.toastr.success('Successful Signed In', 'Success',{
        timeOut:2000,
      });
   
    console.log(this.signInData.user)
    sessionStorage.setItem('userDetails',JSON.stringify(this.signInData.user))
      this.router.navigate(['/userdashboard'])

    }else{
      this.toastr.error(this.signInData.msg,'Error' , {
        timeOut:2000,
      })
      this.router.navigate(['signin'])
    }
      })
     
     
  }


}





