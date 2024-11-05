//admin.route.js

const express = require("express")
const admin_Controller = require("../controller/admin.controller.js")
const router = express.Router()



 
//get

router.get("/dashboard", admin_Controller.dashboard_view)
router.get("/usermanagement", admin_Controller.usermanagement_view)
router.get("/logs", admin_Controller.logs_view)

module.exports = router