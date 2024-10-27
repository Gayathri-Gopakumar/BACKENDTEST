const express=require('express')
const router=new express.Router()
const userController=require('../controllers/userController')

// register: POST to http://localhost:3000/register
router.post('/register',userController.registerController)

// login :POST to http://localhost:3000/login
router.post('/login',userController.loginController)

// getAllUsers in dashboard : GET to  http://localhost:3000/dashboard 
router.get('/dashboard',userController.getAllUsersController)


module.exports=router