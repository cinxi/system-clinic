


//admin

const Admindashboard_view = (req, res) => {
    res.render("admin/Admindashboard")
}


const usermanagement_view = (req, res) => {
    res.render("admin/usermanagement")
}


const logs_view = (req, res) => {
    res.render("admin/logs")
}




//staff

const Staffdashboard_view = (req, res) => {
    res.render("staff/Staffdashboard")
}

const appointment_view = (req, res) => {
    res.render("staff/appointment")
}

const patients_view = (req, res) => {
    res.render("staff/patients")
}









module.exports = {
   
    Admindashboard_view,
    usermanagement_view,
    logs_view,
    Staffdashboard_view,
    appointment_view,
    patients_view,






}