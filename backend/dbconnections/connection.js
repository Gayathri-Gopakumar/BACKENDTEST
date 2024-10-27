const mongoose=require('mongoose')
require('dotenv').config();
const dbConnection=process.env.CONNECTION_STRING

mongoose.connect(dbConnection).then(res=>{
    console.log("MONGODB ATLAS connected succesfully with backendServer" );
}).catch(err=>{
    console.log("CONNECTION FAILED");
    console.log(err);
})