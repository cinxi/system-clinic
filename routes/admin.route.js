// //admin.route.js

// const express = require("express")
// const admin_Controller = require("../controller/admin.controller.js")
// const auth = require("../middleware/auth.js")

// const router = express.Router()

 
// //get

// router.get("/Admindashboard", auth.check_user_auth, admin_Controller.Admindashboard_view)
// router.get("/usermanagement",  auth.check_user_auth, admin_Controller.usermanagement_view)
// router.get("/logs",  auth.check_user_auth, admin_Controller.logs_view)


// //staff
// router.get("/Staffdashboard",  auth.check_user_auth, admin_Controller.Staffdashboard_view)
// router.get("/appointment",  auth.check_user_auth, admin_Controller.appointment_view)
// router.get("/patients",  auth.check_user_auth, admin_Controller.patients_view)


// router.get("/logout", auth.check_user_auth, admin_Controller.logout)

// module.exports = router



//route.js
const express = require("express");
const admin_Controller = require("../controller/admin.controller.js");
const addPatientController = require("../controller/addPatient.controller.js");


const router = express.Router();

// Admin Routes
router.get("/admin/Admindashboard", admin_Controller.Admindashboard_view);
router.get("/admin/usermanagement", admin_Controller.usermanagement_view);
router.get("/admin/logs", admin_Controller.logs_view);

// Staff Routes
router.get("/staff/Staffdashboard", admin_Controller.Staffdashboard_view); 
router.get("/staff/appointment", admin_Controller.appointment_view);
router.get("/staff/patients", admin_Controller.patients_view);



// (Admin) Add new user route
router.post("/admin/addUser", admin_Controller.addUser);


router.post("/staff/addPatient", addPatientController.patients_view )


module.exports = router; 
