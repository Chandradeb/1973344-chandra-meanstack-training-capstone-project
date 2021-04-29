import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInData:any={}
  
  
  constructor(
    public userService:UserService, 
    public router:Router, 
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  signin(userRef:any){
    this.userService.signin(userRef).subscribe(result=>{
      this.signInData = result;
      if(this.signInData.success){
        this.toastr.success('Successfully Signed In', 'Success', {
          timeOut: 2000,
        });
      //token for user login
      sessionStorage.setItem('userSignedIn', 'true');

      //user information for using to edit profile
      sessionStorage.setItem('userDetails',JSON.stringify(this.signInData.user))
      this.router.navigate(['userdashboard'])
      }else{
        this.toastr.error(this.signInData.msg,'Error' , {
          timeOut:2000,
        })
        this.router.navigate(['signin'])
      }
    })
  }
}





