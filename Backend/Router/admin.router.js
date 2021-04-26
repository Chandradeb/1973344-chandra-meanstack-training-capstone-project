const express = require('express');
const router = express.Router();
const admin_controller = require('../Controller/admin.controller.js')

router.post('/adminLogin', admin_controller.admin_login);
router.post('/addProduct', admin_controller.admin_addProduct);
router.post('/updateProduct', admin_controller.admin_updateProduct);
router.delete('/deleteProduct/:productName', admin_controller.admin_deleteProduct);
router.get('/viewRequests', admin_controller.admin_viewRequests);

module.exports = router;