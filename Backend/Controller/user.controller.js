var  UserModel = require('../Model/user.model.js');
const OrderModel = require('../Model/order.model.js')

let signup =(req,res)=>{
    let ename = req.body.userName;
    UserModel.findOne({userName:ename}, (err,result)=>{
        if(err)throw err;
        if(result){
            return res.json({success:false, msg:"User name already exist"})
        }else{
            let user = new UserModel({
                fname:req.body.fname,
                lname:req.body.lname,
                dob:req.body.dob,
                fund:20000,
                addr:req.body.address,
                emailid:req.body.emailid,
                password:req.body.pass,
                userName:req.body.userName,
                ticket:false,
                loginAttempt:0,
                phoneNum:""
            })
            user.save((err,result)=>{
                if(!err){
                    return res.json({success:true, msg:"You have signed up successfully"});
                }else {
                    return res.json({success:false, msg:"Something went wrong"});
                }
            })
        }
    })
}

let signin = (req,res) => {
    let ename = req.body.userName;
    let pass = req.body.pass;
    UserModel.findOne({userName:ename}, (err,result)=>{
        if(err)throw err;
        if(!result){
            return res.json({success:false, msg:"Incorrect user name"})
        }else{
            if(result.password == pass){
                res.json({
                    success:true,
                    user: {
                        emailid:result.emailid,
                        fname:result.fname,
                        lname:result.lname,
                        userName:result.userName,
                        dob:result.dob,
                        addr:result.addr,
                        fund:result.fund,
                        orders:result.itemsNames,
                        phoneNum:result.phoneNum
                    }
                })
            }else {
                return res.json({success:false, msg:"Incorrect password"})
            }
        }
    })
}

let getOrderStatus = (req, res) =>{
    let usrName = req.params.userName;
    OrderModel.find({userName:usrName}, (err,result)=>{
        if(err)throw err;
        if(result.length==0){
            return res.json({success:false, msg:"Can't find the user"})
        }else{
            res.json({
                success:true,
                order:result
            })
        }
    })
}

let updatefname = (req, res)=>{
    let usrname = req.params.userName;
    let efname = req.body.fname;
    UserModel.updateOne({userName:usrname}, {$set: {fname:efname}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                fname: efname
            })
        }
    })
}

let updatelname = (req, res)=>{
    let usrname = req.params.userName;
    let elname = req.body.lname;
    UserModel.updateOne({userName:usrname}, {$set: {lname:elname}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                lname: elname
            })
        }
    })
}

let updateemail = (req, res)=>{
    let usrname = req.params.userName;
    let email = req.body.email;
    UserModel.updateOne({userName:usrname}, {$set: {emailid:email}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                email: email
            })
        }
    })
}

let updatephoneNum = (req, res)=>{
    let usrname = req.params.userName;
    let ephoneNum = req.body.phoneNum;
    UserModel.updateOne({userName:usrname}, {$set: {phoneNum:ephoneNum}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                phoneNum: ephoneNum
            })
        }
    })
}

let updateaddr = (req, res)=>{
    let usrname = req.params.userName;
    let eaddr = req.body.addr;
    UserModel.updateOne({userName:usrname}, {$set: {addr:eaddr}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                addr: eaddr
            })
        }
    })
}

let updatedob = (req, res)=>{
    let usrname = req.params.userName;
    let edob = req.body.dob;
    UserModel.updateOne({userName:usrname}, {$set: {dob:edob}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                dob: edob
            })
        }
    })
}

let updatefund = (req, res)=>{
    let usrname = req.params.userName;
    let efund = req.body.fund;
    UserModel.updateOne({userName:usrname}, {$set: {fund:efund}}, (err,result)=>{
        if(err)throw err;
        if(result.nModified==0){
            return res.json({success:false, msg:"Something went wrong"})
        }else{
            res.json({
                success:true,
                fund: efund
            })
        }
    })
}

module.exports={signin,signup, getOrderStatus, updatefname, updatelname, updateemail, updatephoneNum, updateaddr, updatedob, updatefund}