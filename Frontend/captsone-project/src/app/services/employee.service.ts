import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeLogIn } from '../models/emplyee.model';

import {Order} from '../models/model.employee';
import {Ticket} from '../models/model.employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = environment.apiUrl;
  constructor(public http:HttpClient) { }

  signIn(employee:any){
    let headers = new HttpHeaders();
    headers.append('Content-type','application/json');
    return this.http.post(this.API_URL+'/employee/employeeLogin', employee, {headers:headers});
  }

  storerequestDetails(productRef:any){
    return this.http.post("http://localhost:9090/employee/Request",productRef,{responseType:'text'});
  }

  updatePwd(productRef:any){
   
    return this.http.put("http://localhost:9090/employee/Edit ",productRef,{responseType:'text'});

  }
  updatestatus(productRef:any){
    return this.http.put("http://localhost:9090/employee/Status ",productRef,{responseType:'text'});
  }

  ViewOrderStatus():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:9090/employee/Update")
  }

  ViewTicket():Observable<Ticket[]>{
    return this.http.get<Ticket[]>("http://localhost:9090/employee/Ticket")
  }

  unlockUser(productRef:any){
    return this.http.put("http://localhost:9090/employee/Unlock ",productRef,{responseType:'text'});
  }
  
  refund(productRef:any){
    return this.http.put("http://localhost:9090/employee/Refund",productRef,{responseType:'text'});
  }
}
