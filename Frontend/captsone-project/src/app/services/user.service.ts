import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user/model.user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    ipAddress:string= "http://localhost:9090";
    constructor(private http: HttpClient) { }
    signup(userRef:any){
        return this.http.post("http://localhost:9090/user/signup",userRef);
    }

    signin(userRef:any){
        return this.http.post("http://localhost:9090/user/signin",userRef);
    }

    getOrderStatus(userName:any){
        return this.http.get("http://localhost:9090/user/getOrderStatus/"+ userName);
    }

    updatefname(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updatefname/"+userName, changeRef);
    }

    updatelname(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updatelname/"+userName, changeRef);
    }

    updateemail(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updateemail/"+userName, changeRef);
    }

    updatephoneNum(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updatephoneNum/"+userName, changeRef);
    }

    updateaddr(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updateaddr/"+userName, changeRef);
    }

    updatedob(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updatedob/"+userName, changeRef);
    }

    updatefund(changeRef:any, userName:any){
        return this.http.post("http://localhost:9090/user/updatefund/"+userName, changeRef);
    }

    raiseTicket(ticketRef:any){
        return this.http.post("http://localhost:9090/user/raiseTicket", ticketRef);
    }

    retrieveUser(usrName:any):Observable<User[]>{
        return this.http.get<User[]>(this.ipAddress+"/user/retrieveUser/"+usrName);
    }

}