//user.route.js

const express = require("express")
const userController = require("../controller/user.controller.js")

const router = express.Router()


//get
router.get("/login", userController.login_view   ) 
router.get("/register",userController.register_view )

//post
router.post("/register-user" , userController.save_user )
router.post("/login-user" , userController.login_user )









module.exports = router