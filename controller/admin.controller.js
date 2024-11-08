
//CONTROLLER

//admin

const models = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admindashboard_view = (req, res) => {
    res.render("admin/Admindashboard");
};

const usermanagement_view = (req, res) => {
    res.render("admin/usermanagement");
};

const logs_view = (req, res) => {
    res.render("admin/logs");
};

const Staffdashboard_view = (req, res) => {
    res.render("staff/Staffdashboard");
};

const appointment_view = (req, res) => {
    res.render("staff/appointment");
};

const patients_view = (req, res) => {
    res.render("staff/patients");
};

const logout = (req, res) => {
    res.cookie("token", "", { maxAge: 1000 });
    res.render("login");
};





// Add new user
const addUser = (req, res) => {
    // Step 1: Get data from request
    const data_addUser = {
        FirstName: req.body.firstName_data,
        LastName: req.body.lastName_data,
        Users_Birthdate: req.body.birthdate_data,
        Users_Gender: req.body.gender_data,
        ContactNumber: req.body.contactNumber_data,
        User_Role: req.body.role,
        Username: req.body.Username_data,
        Password: req.body.Password_data,
    };

    // models.user.create(data_addUser)
    // .then(result => {
    //     res.redirect("register?message=Success");
    // })
    // .catch(error => {
    //     console.error("Database insertion error:", error);
    //     res.redirect("register?message=ServerError");
    // });
    
    data_addUser.Password = bcrypt.hashSync(data_addUser.Password, 10);
    console.log("Hashed password:", data_addUser.Password);



    // Step 2: Save data to database
    models.user.create(data_addUser)
        .then(result => {
            res.render("admin/usermanagement");
        })
        .catch(error => {
            console.error(error);  // Log the error for debugging
            res.render("admin/usermanagement");
        });
};

module.exports = {
    Admindashboard_view,
    usermanagement_view,
    logs_view,
    Staffdashboard_view,
    appointment_view,
    patients_view,
    logout,
    addUser,
};
