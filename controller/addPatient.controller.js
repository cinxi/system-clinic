//addPatient.controller.js

const { where } = require("sequelize");
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


const patients_view = (req, res) => {
    res.render("staff/patients");
};

const logout = (req, res) => {
    res.cookie("token", "", { maxAge: 1000 });
    res.render("login");
};




// Add new patient
const save_addPatient = (req, res) => {
    const patient_data = {
        Patient_FirstName: req.body.Patient_FirstName,
        Patient_LastName: req.body.Patient_LastName,
        Patient_Gender: req.body.Patient_Gender,
        DateofBirth: req.body.DateofBirth,
        Patient_ContactNumber: req.body.Patient_ContactNumber,
        Patient_Address: req.body.Patient_Address,
    };

    console.log("Patient data:", patient_data);

    models.Patient.create(patient_data)
        .then(result => {
            console.log("Patient added successfully:", result);
            res.redirect("/patient?message=PatientAdded");
        })
        .catch(error => {
            console.error("Error adding patient:", error);
            res.redirect("/patient?message=ServerError");
        });
};



module.exports = {
    Admindashboard_view,
    usermanagement_view,
    logs_view,
    Staffdashboard_view,
    patients_view,
    logout,
    save_addPatient
};


