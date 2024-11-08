// appointment.controller.js

const models = require("../models");


// Views
const appointment_view = (req, res) => {
    const message = req.query.message || null;
    res.render("staff/appointment", { message });
};

// Add new appointment
const save_addAppointment = (req, res) => {
    const appointment_data = {
        Patient_ID: req.body.Patient_ID,
        Users_ID: req.body.Users_ID,
        Appointment_Date: req.body.Appointment_Date,
        Appointment_Time: req.body.Appointment_Time,
        Appointment_Purpose: req.body.Appointment_Purpose,
        Appointment_Status: req.body.Appointment_Status || "Pending"
    };

    console.log("Appointment data:", appointment_data);

    models.Appointment.create(appointment_data)
        .then(result => {
            console.log("Appointment added successfully:", result);
            res.redirect("/appointment?message=AppointmentAdded");
        })
        .catch(error => {
            console.error("Error adding appointment:", error);
            res.redirect("/appointment?message=ServerError");
        });
};

module.exports = {
    appointment_view,
    save_addAppointment
};
