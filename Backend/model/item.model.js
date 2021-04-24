let mongoose= require("mongoose");
mongoose.Promise= global.Promise;

let itemSchema= mongoose.Schema({
    _id:Number,
    itemName:String,
    price:Number,
    quantity:Number,
    img:String
});

let ItemModel= mongoose.model("itemsTable",itemSchema);

module.exports= ItemModel;
