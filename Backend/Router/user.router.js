const express = require('express');
const router = express.Router();
let admin_controller = require('../Controller/admin.controller.js')
let UserController = require('../Controller/user.controller.js')

router.post('/signup',UserController.signup)
//router.post('/signin',admin_controller.signin)
router.post('/signin',UserController.signin)



module.exports = router;