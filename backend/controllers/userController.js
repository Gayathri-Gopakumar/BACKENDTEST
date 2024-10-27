const users=require('../models/userModel')
const jwt=require('jsonwebtoken')

// register 
exports.registerController=async(req,res)=>{
    console.log("Inside registerController");
    const{firstName,lastName,email,password}=req.body
    console.log(firstName,lastName,email,password);
    try{
        const existingUser=await users.findOne({email})
        console.log(existingUser);
        if(existingUser){
            res.status(406).json("Account already exist. Please login !!!")
        }else{
            const newUser=new users({
                firstName,lastName,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    }catch(err){
        res.status(401).json(err)
    }
    
}

// login logic
exports.loginController=async(req,res)=>{
    console.log("inside logincontroller");
    // get user details from req body
    const {email,password}=req.body
    console.log(email,password);
    // check email and password in user model
    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            // allow login
            // generate token using jwt
            const token=jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)

            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            // incorrect
            res.status(404).json("Invalid email/password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}

// get all users list
exports.getAllUsersController=async(req,res)=>{
    console.log("Inside getAllUsersController ");
    try{
        const getAllUsers=await users.find()
        res.status(200).json(getAllUsers)
    }catch(err){
        res.status(401).json(err)
    }
}