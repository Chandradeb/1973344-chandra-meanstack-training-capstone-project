const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

//defining the schema
let EmployeeSchema = mongoose.Schema({
    _id:String,
    email:String,
    pass:String,
    fname:String,
    lname:String
})

//creating the table model
let EmployeeModel = mongoose.model("",EmployeeSchema,"Employee");

//Export
module.exports = EmployeeModel;
