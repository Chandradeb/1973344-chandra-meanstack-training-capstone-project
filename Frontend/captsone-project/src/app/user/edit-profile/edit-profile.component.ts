import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  changedData:any={};
  userDetails:any={}
  fnameFlag = false;
  lnameFlag = false;
  emailFlag = false;
  phoneNumFlag = false;
  addrFlag=false;
  dobFlag=false;

  changefnameRef = new FormGroup({
    fname:new FormControl()
  });
  changelnameRef = new FormGroup({
    lname:new FormControl()
  });
  changeemailRef = new FormGroup({
    email:new FormControl()
  });
  changephoneNumRef = new FormGroup({
    phoneNum:new FormControl()
  });
  changeaddrRef = new FormGroup({
    addr:new FormControl()
  });
  changedobRef = new FormGroup({
    dob:new FormControl()
  });

  constructor(
    public userService:UserService,
    public toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.showProfile()
  }

  showProfile(){
    this.userDetails=JSON.parse(sessionStorage.getItem("userDetails") || "{}")
  }

  fnameEdit(){
    if(!this.fnameFlag)
    {
      this.fnameFlag = true;
    }else{
      this.fnameFlag = false;
      this.userService.updatefname(this.changefnameRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.fname = this.changedData.fname;
          sessionStorage.setItem('userDetails',JSON.stringify(this.userDetails))
        }else{
          this.toastr.error(this.changedData.msg, 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }

  lnameEdit(){
    if(!this.lnameFlag)
    {
      this.lnameFlag = true;
    }else{
      this.lnameFlag = false;
      this.userService.updatelname(this.changelnameRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.lname = this.changedData.lname;
          sessionStorage.setItem('userDetails',JSON.stringify(this.userDetails))
        }else{
          this.toastr.error(this.changedData.msg, 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }

  emailEdit(){
    if(!this.emailFlag)
    {
      this.emailFlag = true;
    }else{
      this.emailFlag = false;
      this.userService.updateemail(this.changeemailRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.emailid = this.changedData.email;
          sessionStorage.setItem('userDetails',JSON.stringify(this.userDetails))
        }else{
          this.toastr.error(this.changedData.msg, 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }

  phoneNumEdit(){
    if(!this.phoneNumFlag)
    {
      this.phoneNumFlag = true;
    }else{
      this.phoneNumFlag = false;
      this.userService.updatephoneNum(this.changephoneNumRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.phoneNum = this.changedData.phoneNum;
          sessionStorage.setItem('userDetails',JSON.stringify(this.userDetails))
        }else{
          this.toastr.error(this.changedData.msg, 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }

  addrEdit(){
    if(!this.addrFlag)
    {
      this.addrFlag = true;
    }else{
      this.addrFlag = false;
      this.userService.updateaddr(this.changeaddrRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.addr = this.changedData.addr;
          sessionStorage.setItem('userDetails',JSON.stringify(this.userDetails))
        }else{
          this.toastr.error(this.changedData.msg, 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }
  dobEdit(){
    if(!this.dobFlag)
    {
      this.dobFlag = true;
    }else{
      this.dobFlag = false;
      this.userService.updatedob(this.changedobRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.dob = this.changedData.dob;
          sessionStorage.setItem('userDetails',JSON.stringify(this.userDetails))
        }else{
          this.toastr.error(this.changedData.msg, 'Error', {
            timeOut: 2000,
          });
        }
      })
    }
  }

}
