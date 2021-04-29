import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  sendTicketRef = new FormGroup({
    userName:new FormControl(),
    msg:new FormControl()
  });

  changedData:any={};

  constructor(
    public userService:UserService,
    public toastr:ToastrService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  sendTicket(){
    this.userService.raiseTicket(this.sendTicketRef.value).subscribe(result=>{
      this.changedData=result;
      if(this.changedData.success){
        this.toastr.success(this.changedData.msg, 'success', {
          timeOut: 2000,
        });
      }else{
        this.toastr.error(this.changedData.msg, 'Error', {
          timeOut: 2000,
        });
      }
    })
  }
}
