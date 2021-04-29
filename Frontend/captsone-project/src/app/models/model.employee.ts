export class Order{
    constructor(public _id:Number,public userName:String,public status:string,public total:Number){}
}
export class Ticket{
    constructor(public userName:String,public msg:string){}

}
export class User{
    constructor(public usrName:String,public fund:Number){}
}