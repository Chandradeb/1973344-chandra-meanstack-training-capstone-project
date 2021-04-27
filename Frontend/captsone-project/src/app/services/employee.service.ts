import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeLogIn } from '../models/emplyee.model';

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
}
