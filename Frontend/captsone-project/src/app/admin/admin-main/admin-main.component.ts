import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AdminUserModel } from 'src/app/models/admin.model';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  adminLoginSubscription!: Subscription;
  adminUserModel!: AdminUserModel;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminAuthService: AdminAuthService,
    private adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.adminAuthService.removeSession();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    var username = this.f.username.value;
    var password = this.f.password.value;

    this.loading = true;

    this.adminUserModel = {
      user: username,
      password: password
    }

    this.adminLoginSubscription = this.adminService.login(this.adminUserModel).subscribe(data => {
      console.log(data);
      if (data.message == 'Success') {
        this.loading = false;
        sessionStorage.setItem('adminuser', 'true');
        this.toastr.success('Successfully Logged In', 'Success', {
          timeOut: 3000,
        });
        this.router.navigate(['/admin-dashboard']);
      } else {
        console.log('Wrong credentials');
        this.loading = false;
        this.toastr.error('Wrong Password', 'Error', {
          timeOut: 3000,
        });
      }
    })
  }

}
