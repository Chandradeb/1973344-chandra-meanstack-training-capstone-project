import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  // isLoggedIn: boolean = false;
  isIndividualOp: boolean = false;
  isAddProduct: boolean = false;
  isUpdateProduct: boolean = false;
  isDeleteProduct: boolean = false;
  isViewRequests: boolean = false;

  constructor(private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {

  }

  cancelIndOp(event: any) {
    console.log("event", event);
    this.deactivateAllOps();
    this.isIndividualOp = false;

  }

  addProduct() {
    this.deactivateAllOps();
    this.isAddProduct = true;
  }

  updateProduct() {
    this.deactivateAllOps();
    this.isUpdateProduct = true;
  }

  deleteProduct() {
    this.deactivateAllOps();
    this.isDeleteProduct = true;
  }

  viewRequests() {
    this.deactivateAllOps();
    this.isViewRequests = true;
  }

  deactivateAllOps() {
    this.isIndividualOp = true;
    this.isAddProduct = false;
    this.isUpdateProduct = false;
    this.isDeleteProduct = false;
    this.isViewRequests = false;
  }
}
