const EmployeeModel = require("../Model/employee.model.js")
const ObjectId = require('mongodb').ObjectId;


let employeeLogin = (req, res)=>{
    let eemail = req.body.email;
    let epass = req.body.pass;

    EmployeeModel.findOne({email:eemail}, (err, result)=>{
        if(err)throw err;
        if(!result){
            return res.json({success:false, msg: "Incorrect email!!"})
        }else{
            if(result.password == epass){
                res.json({
                    success:true,
                    employee: {
                        _id:result._id,
                        email:result.email,
                        fname:result.fname,
                        lname:result.lname
                    }
                })
            }else{
                return res.json({success:false, msg: "Incorrect password!!"})
            }
        }
    })
}


module.exports = {employeeLogin}