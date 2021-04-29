import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Ticket } from "../../models/model.employee";

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  tickets?:Array<Ticket>
  constructor(public Emser:EmployeeService) { }

  ngOnInit(): void {
   this.reloadpage();
  }
  reloadpage(){
    this.Emser.ViewTicket().subscribe(result=>this.tickets=result);
  }
}
