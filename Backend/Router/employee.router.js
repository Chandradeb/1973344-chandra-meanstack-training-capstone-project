const express = require('express');
const router = express.Router();
const EmployeeController = require('../Controller/employee.controller.js')

//router connecting to controller
router.post('/employeeLogin', EmployeeController.employeeLogin);

module.exports = router;