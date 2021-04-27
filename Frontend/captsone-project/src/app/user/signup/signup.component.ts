import { Component, OnInit } from '@angular/core';
//import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }
  signup(userRef:any){
    console.log(userRef);
   this.userService.signup(userRef);
  }
}
