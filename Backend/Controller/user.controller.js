var  UserModel = require('../Model/user.model.js');


let signup =(req,res)=>{
    let user = new UserModel({
    _id:req.body.uid,
    fname:req.body.fname,
    lname:req.body.lname,
    dob:req.body.dob,
    address:req.body.address,
    emailid:req.body.emailid,
    password:req.body.pass
    })
  

    user.save((err,result)=>{
        if(!err){
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
        }
    })
}

//exports.signin =(req,res)=>{
//}

let signin = (req,res) => {
let uid = req.body.uid
let pass = req.body.pass

UserModel.findOne({_id:uid}, (err,result)=>{
    if(err)throw err;
    if(!result){
        return res.json({success:false, msg:"Incorrect id"})
    }else{
        if(result.password == pass){
            res.json({
                success:true,
                user: {
                    _id:result._id,
                    email:result.email,
                    fname:result.fname,
                    lname:result.lname,
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