'use strict';

var adminModel = require('../Model/admin.model.js')

exports.admin_login = function(req, res) {
    // console.log('admin_controller')
    var body = req.body;
    adminModel.getAdminLogin(body, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            res.json(login)
        }
    })
}

exports.admin_addProduct = function(req, res) {
    var body = req.body;
    adminModel.addProduct(body, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            res.json(login)
        }
    })
}

exports.admin_updateProduct = function(req, res) {
    var body = req.body;
    console.log('updateBody', body)
    adminModel.updateProduct(body, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            // console.log('login', login);
            res.json(login)
        }
    })
}

exports.admin_deleteProduct = function(req, res) {
    let pid = req.params.productName;
    adminModel.deleteProduct(pid, function(err, login) {
        if(err) {
            res.send(err);
        } else {
            // console.log('login', login);
            res.json(login)
        }
    })
}

exports.admin_viewRequests = function(req, res) {
    adminModel.getEmployeeRequests(req, function(err, data) {
        if(err) {
            res.send(err);
        } else {
            // console.log('login', login);
            res.json(data)
        }
    })
}

