import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AdminProductModel, AdminUserModel, AdminViewRequestModel, Order, Product, ServiceMessae, User } from '../models/admin.model';
import { environment } from 'src/environments/environment';
import { SignupComponent } from '../user/signup/signup.component';
import { Observable } from 'rxjs';

//import { timeStamp } from 'node:console';

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
    console.log(employeeRef)
    this.http.post("http://localhost:9090/admin/Signup",employeeRef,{responseType:"text"}).
      subscribe(result=>console.log(result),error=>console.log(error));

  }

  deleteEmployee(id:any){
    return this.http.delete("http://localhost:9090/admin/deleteEmployee/"+id,{responseType:'text'});
  }

  dailyReports():Observable<Order>{
    return this.http.get<Order>("http://localhost:9090/admin/dailyReports")
  }

  weeklyReports():Observable<Order>{
    return this.http.get<Order>("http://localhost:9090/admin/weeklyReports")
  }

  monthlyReports():Observable<Order>{
    return this.http.get<Order>("http://localhost:9090/admin/monthlyReports")
  }

  productReports():Observable<Product>{
    return this.http.get<Product>("http://localhost:9090/admin/productDetails")
  }

  costumerReports():Observable<User>{
    return this.http.get<User>("http://localhost:9090/admin/costumerDetails")
  }
 

}

