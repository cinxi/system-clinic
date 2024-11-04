
const express = require("express")
const admin_Controller = require("../controller/admin.controller.js")

const router = express.Router()
 
//get
router.get("/home", admin_Controller.home_view)  
router.get("/addstaff", admin_Controller.addstaff_view)
router.get("/view", admin_Controller.view_view)
router.get("/update", admin_Controller.update_view)

module.exports = router