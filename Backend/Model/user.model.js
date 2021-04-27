let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;      // creating reference. 

let UserSchema = new Schema({
    _id:Number,
    fname:String,
    lname:String,
    dob:Date,
    fund:Number,
    address:String,
    emailid:String,
    password:String
})



let UserModel = mongoose.model("user",UserSchema,"user");

module.exports = UserModel