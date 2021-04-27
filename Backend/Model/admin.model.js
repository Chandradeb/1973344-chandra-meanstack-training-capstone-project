var admin = function (admin) { };
const { v4: uuidv4 } = require('uuid');
const { db } = require('./employee.model');

const mongooseDbOption = {       // to avoid warning
    useNewUrlParser: true,
    useUnifiedTopology: true
}

admin.getAdminLogin = function getAdminLogin(body, res) {
    // console.log('body', body)
    var sentUser = body.user;
    var sentPassword = body.password;

    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017";
    mongoClient.connect(url, mongooseDbOption, (err1, client) => {
        if (!err1) {
            let db = client.db("grocery_store");
            db.collection("admin_login").find({ user: sentUser }).toArray(function (err, result) {
                if (err) throw err;
                if (result.length > 0) {
                    var actualPassword = result[0].password;
                    // console.log(actualPassword);
                    if (actualPassword == sentPassword) {
                        res(null, { message: 'Success', text: 'Succesfully Logged In' })
                    } else {
                        res(null, { message: 'Error', text: 'Error' })
                    }
                } else {
                    res(null, { message: 'Error', text: 'Error' })
                }
                client.close();
            });
        }
    })
}

admin.addProduct = function addProduct(body, res) {
    // console.log('body', body)
    var name = body.name;
    var price = body.price;
    var quantity = body.quantity;
    
    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017"
    var productObj = { name: name, price: price, quantity: quantity };
    let nameObj = { name:body.name};
    mongoClient.connect(url, mongooseDbOption, (err1, client) => {
        if (!err1) {
            let db = client.db("grocery_store");
            db.collection("Products").findOne(nameObj,(error,data) => {
                if(data){
                    res(null, { message: 'Error', text: 'Product already exist'});
                    client.close();
                }else{     
                    db.collection("Products").insertOne(productObj, (err2, result) => {
                        if (!err2) {
                            res(null, { message: 'Success', text: 'Succesfully added a product' })
                        } else {
                            res(null, { message: 'Error', text: 'Somnething went wrong' })
                        }
                        client.close();
                    });
                }
            })
        }
    })
}


admin.updateProduct = function updateProduct(body, res) {
    // console.log('body', body)
    var name = body.name;
    var price = body.price;
    var quantity = body.quantity;
    
    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017"

    mongoClient.connect(url, mongooseDbOption, (err1, client) => {
        if (!err1) {
            let db = client.db("grocery_store");
            var myquery = { name: name };
            var newvalues = { $set: {  price: price, quantity: quantity } };
            db.collection("Products").updateOne(myquery, newvalues,(err2, result) => {
                if (!err2) {
                    res(null, { message: 'Success', text: 'Succesfully updated a product' })
                } else {
                    res(null, { message: 'Error', text: 'Error' })
                }
                client.close();
            });
        }
    })
}

admin.deleteProduct = function deleteProduct(productName, res) {
    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017"

    mongoClient.connect(url, mongooseDbOption, (err1, client) => {
        if (!err1) {
            let db = client.db("grocery_store");
            db.collection("Products").deleteOne({ name: productName}, (err2, result) => {
                if (!err2) {
                    res(null, { message: 'Success', text: 'Succesfully updated a product' })
                } else {
                    res(null, { message: 'Error', text: 'Error' })
                }
                client.close();
            });
        }
    })
}


admin.getEmployeeRequests = function getEmployeeRequests(req, res) {

    let mongoClient = require("mongodb").MongoClient;
    let url = "mongodb://localhost:27017"

    mongoClient.connect(url, mongooseDbOption, (err1, client) => {
        if (!err1) {
            let db = client.db("grocery_store");
            db.collection("EmployeeRequests").find({}).toArray(function (err2, result) {
                if (!err2) {
                    res(null, result)             
                } else {
                    res(null, { message: 'Error', text: 'Error' })             
                }
                client.close();
            });
        }
    })
}

module.exports = admin;