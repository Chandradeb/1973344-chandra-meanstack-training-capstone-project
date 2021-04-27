import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})

export class UserService{

    constructor(private http: HttpClient) { }
    signup(userRef:any){
        console.log(userRef)
        this.http.post("http://localhost:9090/user/signup",userRef,{responseType:'text'}).
        subscribe(result=>console.log(result),error=>console.log(error));
     }
     signin(userRef:any){
       console.log(userRef)
       return this.http.post("http://localhost:9090/user/signin",userRef)
       
     }
}