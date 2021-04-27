const express = require('express');
const router = express.Router();
let UserController = require('../Controller/user.controller.js')

router.post('/signup',UserController.signup)
router.post('/signin',UserController.signin)



module.exports = router;