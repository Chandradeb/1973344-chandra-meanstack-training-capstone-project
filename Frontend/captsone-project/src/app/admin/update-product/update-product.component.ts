import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminProductModel } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  @Output() dashboardChange = new EventEmitter();

  updateProductForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  adminProductModel!: AdminProductModel;
  productSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.updateProductForm = this.formBuilder.group({
      productname: ['', Validators.required],
      productprice: ['', Validators.required],
      productquantity: ['', Validators.required]
    });
  }

  get f() { return this.updateProductForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateProductForm.invalid) {
      return;
    }

    var productName = this.f.productname.value;
    var productPrice = this.f.productprice.value;
    var productQuantity = this.f.productquantity.value;

    this.loading = true;

    this.adminProductModel = {
      name: productName,
      price: productPrice,
      quantity: productQuantity
    }

    this.productSubscription = this.adminService.updateProduct(this.adminProductModel).subscribe(data => {
      console.log(data);
      if (data.message == 'Success') {
        this.loading = false;
        this.toastr.success('Successfully updated the product', 'Success', {
          timeOut: 3000,
        });
        this.dashboardChange.emit("cancel");
      } else {
        console.log('Something is wrong');
        this.loading = false;
        this.toastr.error('Something went wrong', 'Error', {
          timeOut: 3000,
        });
      }
    })
  }

  goToDashboard() {
    this.dashboardChange.emit("cancel");
  }

}
