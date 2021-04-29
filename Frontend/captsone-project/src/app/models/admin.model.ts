import { ArrayType } from "@angular/compiler";

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
    _id!: number;
    prodreq!: string;
}
export class Employee {
    constructor(public _id:number,public fname:string,public lname:string,public emailid:string,public password:string){}
}

export class User {
    constructor(public _id:number,public fname:string,public lname:string,public dob:Date,public address:string,public emailid:string,public pass:string){}
}

export class Product {
    constructor(public name:string,public price:number,public quantity:number){}
}

export class Order {
    constructor(public _id:number, public orderItems:ArrayType,public userName:string, public status:String, public total:Number,public date:Date){}
}

//public _id:number,public orderItems:Array(), public userName:string,public status:String, public total:Number,public date:Date