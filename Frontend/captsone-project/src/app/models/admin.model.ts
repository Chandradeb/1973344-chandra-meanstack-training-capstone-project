export class AdminUserModel {
    user!: string;
    password!: string;
}

export class ServiceMessae {
    message!: string;
    text!: string;
}

export class AdminProductModel {
    name!: string;
    price!: number;
    quantity!: number;
}

export class AdminProductUpdateModel {
    id!: string;
    price!: number;
    quantity!: number;
}

export class AdminViewRequestModel {
    id!: string;
    request!: string;
}
export class Employee {
    constructor(public _id:number,public fname:string,public lname:string,public emailid:string,public password:string){}
}

export class User {
    constructor(public _id:number,public fname:string,public lname:string,public dob:Date,public address:string,public emailid:string,public pass:string){}
}
