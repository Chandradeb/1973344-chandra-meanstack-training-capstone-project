const express = require('express');
const router = express.Router();
let UserController = require('../Controller/user.controller.js')

router.post('/signup',UserController.signup)
router.post('/signin',UserController.signin)
router.get('/getOrderStatus/:userName', UserController.getOrderStatus)
router.post('/updatefname/:userName', UserController.updatefname)
router.post('/updatelname/:userName', UserController.updatelname)
router.post('/updateemail/:userName', UserController.updateemail)
router.post('/updatephoneNum/:userName', UserController.updatephoneNum)
router.post('/updateaddr/:userName', UserController.updateaddr)
router.post('/updatedob/:userName', UserController.updatedob)
router.post('/updatefund/:userName', UserController.updatefund)

module.exports = router;