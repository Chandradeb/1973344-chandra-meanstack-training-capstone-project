let ItemModel= require("../model/item.model.js")

//this returns a json array to front end to display the content of array
let getAllItems= (req,res)=> {
    ItemModel.find({}, (err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

//to add an item to shopping cart we need id of user, and id of item
let addItemToCart= (req, res)=> {

}