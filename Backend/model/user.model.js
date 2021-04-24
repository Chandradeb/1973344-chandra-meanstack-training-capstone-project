let mongoose= require("mongoose");
mongoose.Promise= global.Promise;

let userSchema= mongoose.Schema({
    _id:Number,
    fname:String,
    lname:String,
    shoppingCart:Array(), 
    fund:Number
});

let UserModel= mongoose.model("usersTable",userSchema);

module.exports= UserModel;

