const express =require('express')
const {authcontrollers} =require('../controllers/authControllers');
const registerUser = require('../controllers/authControllers');

const userRouter=express.Router();

userRouter.post('/register',registerUser);

module.exports=userRouter;