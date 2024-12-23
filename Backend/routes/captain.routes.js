const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require("express-validator");


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('First name must be atleat 3 character long'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be of atleast 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 character long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle')
],
    captainController.registerCaptain
)


module.exports = router;