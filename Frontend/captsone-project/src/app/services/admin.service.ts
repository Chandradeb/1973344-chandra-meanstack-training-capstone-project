import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AdminProductModel, AdminUserModel, AdminViewRequestModel, Order, Product, ServiceMessae, User } from '../models/admin.model';
import { environment } from 'src/environments/environment';
import { SignupComponent } from '../user/signup/signup.component';
import { Observable } from 'rxjs';


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
    return this.http.post(this.API_URL+ "/admin/Signup",employeeRef);

  }

  deleteEmployee(email:any){
    return this.http.delete(this.API_URL+ "/admin/deleteEmployee/"+email,{responseType:'text'});
  }

  dailyReports():Observable<Order>{
    return this.http.get<Order>(this.API_URL+ "/admin/dailyReports")
  }

  weeklyReports():Observable<Order>{
    return this.http.get<Order>(this.API_URL+ "/admin/weeklyReports")
  }

  monthlyReports():Observable<Order>{
    return this.http.get<Order>(this.API_URL+ "/admin/monthlyReports")
  }

  productReports():Observable<Product>{
    return this.http.get<Product>(this.API_URL+ "/admin/productDetails")
  }

  costumerReports():Observable<User>{
    return this.http.get<User>(this.API_URL+ "/admin/costumerDetails")
  }
 

}

