const express=require('express')
const {createSession}=require('../controllers/sessionControllers')
const { protect } = require('../middlewares/Auth');


const qRoute=express.Router();

qRoute.post('/create',protect,createSession)

module.exports = qRoute