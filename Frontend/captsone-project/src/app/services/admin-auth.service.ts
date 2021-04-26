import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private router: Router) { }

  isAdminLoggedIn() {
    return sessionStorage.getItem('adminuser');
  }

  adminLogout() {
    sessionStorage.removeItem('adminuser');
    this.router.navigate(['/admin-main'])
  }

  removeSession() {
    sessionStorage.removeItem('adminuser');
  }
}
