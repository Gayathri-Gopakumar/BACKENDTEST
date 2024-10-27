const express=require('express')
const cors=require('cors')
require('dotenv')
require ('./dbconnections/connection')
const router=require('./router/routes')

const backendServer=new express()

backendServer.use(cors())
backendServer.use(express.json())
backendServer.use(router)

const PORT=3000 || process.env.PORT

backendServer.listen(PORT,()=>{
    console.log(`server started at ${PORT} and is waiting for client request`);
})

// resolving GET
backendServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:green">SERVER STARTED AND WAITING FOR CLIENT REQUEST</h1>`)
})

// resolvin POST
backendServer.post('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:green">SERVER RECEIVED POST REQUEST</h1>`)
})

// resolving PUT
backendServer.put('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:green">SERVER RECIEVED PUT REQUEST</h1>`)
})

// resolving Delete
backendServer.delete('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:green">SERVER RECEIVED DELETE REQUEST</h1>`)
})
