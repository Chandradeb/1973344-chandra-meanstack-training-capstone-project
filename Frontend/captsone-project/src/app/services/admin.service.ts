import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AdminProductModel, AdminUserModel, AdminViewRequestModel, ServiceMessae } from '../models/admin.model';
import { environment } from 'src/environments/environment';
import { SignupComponent } from '../user/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private API_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(adminUser: AdminUserModel) {
    return this.http.post<ServiceMessae>(`${this.API_URL}/admin/adminLogin`, adminUser)
  }

  addProduct(productModel: AdminProductModel) {
    return this.http.post<ServiceMessae>(`${this.API_URL}/admin/addProduct`, productModel)
  }

  updateProduct(productModel: AdminProductModel) {
    return this.http.post<ServiceMessae>(`${this.API_URL}/admin/updateProduct`, productModel)
  }

  deleteProduct(productName: string) {
    return this.http.delete<ServiceMessae>(`${this.API_URL}/admin/deleteProduct/${productName}`)
  }

  viewRequests() {
    return this.http.get<AdminViewRequestModel[]>(`${this.API_URL}/admin/viewRequests`)
  }

  Signup(employeeRef:any){
    return this.http.post("http://localhost:9090/admin/Signup",employeeRef);

  }

  deleteEmployee(email:any){
    return this.http.delete("http://localhost:9090/admin/deleteEmployee/"+email,{responseType:'text'});
  }
 

}

