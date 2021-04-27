import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  signup(){
    this.router.navigate(["signup"]);
  }
  signin(){
    this.router.navigate(["signin"]);
  }
  raiseticket(){

  }
}
