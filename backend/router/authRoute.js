const express = require('express');
const { registerUser, login, getUser } = require('../controllers/authControllers'); // ✅ Correct way
const { protect } = require('../middlewares/Auth');

const userRouter = express.Router();

userRouter.post('/register', registerUser); // registerUser is now a function ✅
userRouter.post('/login', login);           // login is now a function ✅
userRouter.get('/profile', protect, getUser); 

module.exports = userRouter;
