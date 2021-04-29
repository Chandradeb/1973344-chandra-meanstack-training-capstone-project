import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user/model.user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    ipAddress:string= environment.apiUrl;
    constructor(private http: HttpClient) { }
    signup(userRef:any){
        return this.http.post(this.ipAddress + "/user/signup",userRef);
    }

    signin(userRef:any){
        return this.http.post(this.ipAddress + "/user/signin",userRef);
    }

    getOrderStatus(userName:any){
        return this.http.get(this.ipAddress + "/user/getOrderStatus/"+ userName);
    }

    updatefname(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updatefname/"+userName, changeRef);
    }

    updatelname(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updatelname/"+userName, changeRef);
    }

    updateemail(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updateemail/"+userName, changeRef);
    }

    updatephoneNum(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updatephoneNum/"+userName, changeRef);
    }

    updateaddr(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updateaddr/"+userName, changeRef);
    }

    updatedob(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updatedob/"+userName, changeRef);
    }

    updatefund(changeRef:any, userName:any){
        return this.http.post(this.ipAddress + "/user/updatefund/"+userName, changeRef);
    }

    raiseTicket(ticketRef:any){
        return this.http.post(this.ipAddress + "/user/raiseTicket", ticketRef);
    }

    retrieveUser(usrName:any):Observable<User[]>{
        return this.http.get<User[]>(this.ipAddress+"/user/retrieveUser/"+usrName);
    }

}