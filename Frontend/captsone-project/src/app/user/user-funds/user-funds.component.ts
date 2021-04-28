import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {
  changedData:any={};
  userDetails:any={}
  fundFlag = false;

  changefundRef = new FormGroup({
    accNum:new FormControl(),
    fund:new FormControl()
  });

  constructor(
    public userService:UserService,
    public toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.showFunds();
  }

  showFunds(){
    this.userDetails=JSON.parse(sessionStorage.getItem("userDetails") || "{}")
  }

  fundEdit(){
    if(!this.fundFlag)
    {
      this.fundFlag = true;
    }else{
      let total = Number(this.changefundRef.value.fund)+Number(this.userDetails.fund);
      this.changefundRef.value.fund = total;
      console.log(this.changefundRef.value.fund)
      this.fundFlag = false;
      this.userService.updatefund(this.changefundRef.value,this.userDetails.userName).subscribe(result=>{
        this.changedData = result;
        if(this.changedData.success){
          this.userDetails.fund = this.changedData.fund;
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
