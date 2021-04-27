let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;      // creating reference. 

let EmployeeSchema = new Schema({
    _id:Number,
    fname:String,
    lname:String,
    emailid:String,
    password:String
})




let EmployeeModel = mongoose.model("",EmployeeSchema,"Employee");

module.exports = EmployeeModel