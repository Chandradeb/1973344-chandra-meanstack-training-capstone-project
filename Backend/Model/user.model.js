let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;      // creating reference. 

let UserSchema = new Schema({
    fname:String,
    lname:String,
    userName:String,
    ticket:Boolean,
    dob:Date,
    fund:Number,
    addr:String,
    emailid:String,
    password:String
})



let UserModel = mongoose.model("user",UserSchema,"user");

module.exports = UserModel