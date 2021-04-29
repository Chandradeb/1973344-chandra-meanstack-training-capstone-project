import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-generatereports',
  templateUrl: './generatereports.component.html',
  styleUrls: ['./generatereports.component.css']
})
export class GeneratereportsComponent implements OnInit {
   
  users?:any
  products?:any
  report?:any
  month?:any
  week?:any
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

  dailyReports(){
     this.adminService.dailyReports().subscribe(result=>this.report=result)
  }

  weeklyReports(){
    this.adminService.weeklyReports().subscribe(result=>this.week=result)
  }

  monthlyReports(){
    this.adminService.monthlyReports().subscribe(result=>this.month=result)
  }

  productReports(){
    this.adminService.productReports().subscribe(result=>this.products=result)
  }
  
  costumerReports(){
    console.log("received")
    this.adminService.costumerReports().subscribe(result=>this.users=result)
    
  }
}
