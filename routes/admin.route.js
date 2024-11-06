//admin.route.js

const express = require("express")
const admin_Controller = require("../controller/admin.controller.js")
const router = express.Router()

 
//get

router.get("/Admindashboard", admin_Controller.Admindashboard_view)
router.get("/usermanagement", admin_Controller.usermanagement_view)
router.get("/logs", admin_Controller.logs_view)


//staff
router.get("/Staffdashboard", admin_Controller.Staffdashboard_view)
router.get("/appointment", admin_Controller.appointment_view)
router.get("/patients", admin_Controller.patients_view)


module.exports = router