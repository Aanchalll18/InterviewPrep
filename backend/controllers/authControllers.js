const User = require("../Models/UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User Already Exists!'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      name,
      password: hashedPassword
    });

    const token = generateToken(newUser._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};



const login=async(req,res)=>{
  try {
    const {email,password}=req.body;
    if(!email || !password){
      return res.json({
        success:false,
        message:'All fields are required!'
      })
    }
    const user=await User.findOne({email});
    if(!user){
      return res.json({
        success:false,
        message:'User Not found!'
      })
    }
    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
      return res.json({
        success:false,
        message:'Incorrect Password'
      })
    }
    return res.status(200).json({
      success:true,
      message:'User LoggedIn',
    })
  } catch (error) {
     console.log(error);
     return res.json({
      success:false,
      message:'Something went Wrong!'
     })
  }
}


const getUser=async(req,res)=>{

  try {
    const user=await User.findById(req.user.id).select('-password');
    if(!user){
      return res.json({
        success:false,
        message:'User Not Found!'
      })
    }
    res.json({
      success:true,
      user
    })
  } catch (error) {
    console.log(error);
    return res.json({
      success:false,
      message:'Something went wrong!'
    })
  }
}


module.exports = {
  registerUser,
  login,
  getUser 
};
