import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // get this from Google console



// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false,message:"User dosenot exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id)
        res.json({success:true,token})

    }catch(error){
       console.log(error)
       res.json({success:false,message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try{
        const exists = await userModel.findOne({email})
        if (exists){
            return res.json({success:false,message:"User already exists"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if(password.length<0){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    }catch(error){
        console.log(error)  
        res.json({success:false,message:"Error"})
    }
}

const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    // Verify token from Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload(); // Contains name, email, etc.
    const { email, name } = payload;

    // Check if user already exists
    let user = await userModel.findOne({ email });

    if (!user) {
      // Create new user if doesn't exist
      user = new userModel({
        name,
        email,
        isGoogleUser: true,
        password: "", // Optional or empty
      });
      await user.save();
    }

    const jwtToken = createToken(user._id);
    res.json({ success: true, token: jwtToken });

  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: "Google login failed" });
  }
};


export {loginUser, registerUser, googleLogin}