//admin.controller.js


const dashboard_view = (req, res) => {
    res.render("admin/dashboard")
}


const usermanagement_view = (req, res) => {
    res.render("admin/usermanagement")
}


const logs_view = (req, res) => {
    res.render("admin/logs")
}






module.exports = {
   
    dashboard_view,
    usermanagement_view,
    logs_view



}