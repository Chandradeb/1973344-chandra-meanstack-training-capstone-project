import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminViewRequestModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  @Output() dashboardChange = new EventEmitter();
  viewRequestsSubscription!: Subscription;
  requestData: boolean = false;
  requestsModel: AdminViewRequestModel[] = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getRequests()
  }

  getRequests() {
    this.viewRequestsSubscription = this.adminService.viewRequests().subscribe(data => {
      console.log('data', data)
      this.requestData = true;
      this.requestsModel = data;
    })
  }

  goToDashboard() {
    this.dashboardChange.emit("cancel");
  }
}
