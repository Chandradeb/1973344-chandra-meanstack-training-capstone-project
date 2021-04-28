import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})

export class UserService{

    constructor(private http: HttpClient) { }
    signup(userRef:any){
        return this.http.post("http://localhost:9090/user/signup",userRef);
     }
     signin(userRef:any){
        return this.http.post("http://localhost:9090/user/signin",userRef);
     }
}