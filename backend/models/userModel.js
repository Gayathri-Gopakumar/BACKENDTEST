const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
       
        match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number']
    }
})

const users=mongoose.model("users",userSchema)

module.exports=users