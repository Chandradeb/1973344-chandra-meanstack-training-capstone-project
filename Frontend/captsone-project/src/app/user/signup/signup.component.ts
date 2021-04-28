import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpData:any={}
  constructor(
    public userService:UserService,
    public toastr:ToastrService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  signup(userRef:any){
    this.userService.signup(userRef).subscribe(result=>{
      this.signUpData=result;
      if(this.signUpData.success){
        this.toastr.success(this.signUpData.msg, 'Success', {
          timeOut: 2000,
        });
      }else{
        this.toastr.error(this.signUpData.msg, 'Error', {
          timeOut: 2000,
        });
      }
    })
    
  }
}
