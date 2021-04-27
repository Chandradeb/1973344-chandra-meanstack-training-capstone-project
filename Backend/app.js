//load all required modules
require('dotenv').config();
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require('cors');

//middleware enable data from post method
//middleware: between client and server
app.use(bodyParser.urlencoded({ extended: true }));  //enable data from url (body part data)
app.use(bodyParser.json());  //enable data from jason file
app.use(cors());   //enable cors policy

let url= "mongodb://localhost:27017/grocery_store";

//Database connection without warning
const mongooseDbOption = {       // to avoid warning
   useNewUrlParser: true,
   useUnifiedTopology: true
}
//ready to connct
mongoose.connect(url, mongooseDbOption);
//connect the database
mongoose.connection;


//link to router module
var User = require("./Router/user.router.js");
var Admin = require("./Router/admin.router.js");
var Employee = require("./Router/employee.router.js");

//Middelware
app.use("/user", User);
app.use("/admin", Admin);
app.use("/employee", Employee);

app.listen(9090, () => console.log("Server running on port 9090"));