var  UserModel = require('../Model/user.model.js');


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
                address:req.body.address,
                emailid:req.body.emailid,
                password:req.body.pass,
                userName:req.body.userName,
                ticket:false
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
                        email:result.email,
                        fname:result.fname,
                        lname:result.lname,
                        userName:result.userName,
                        dob:result.dob,
                        address:result.address,
                        fund:result.fund
                    }
                })
            }else {
                return res.json({success:false, msg:"Incorrect password"})
            }
        }
    })
}

module.exports={signin,signup}