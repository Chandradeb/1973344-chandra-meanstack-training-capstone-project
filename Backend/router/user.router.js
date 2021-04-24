let express= require("express");
let router= express.Router();
let UserController= require("../controller/user.controller.js");

router.get("/allItems", UserController.getItemsDetails);
router.post("/addItemToCart", UserController.addItemToCart);