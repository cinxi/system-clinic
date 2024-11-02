const express = require("express")
const userController = require("../controller/user.controller.js")
const adminController = require("../controller/admin.controller.js")
const router = express.Router()

//get
router.get("/login", userController.login_view)
router.get("/register", userController.register_view)

router.get("/admindashboard", adminController.admindashboard_view)
router.get("/usermanagement", adminController.usermanagement_view)
router.get("/logs", adminController.logs_view)


//post
router.post("/register-user", userController.save_user)


module.exports = router