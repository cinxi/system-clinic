const admindashboard_view = (req, res) => {
    res.render("admindashboard")
}

const usermanagement_view = (req, res) => {
    res.render("usermanagement")
}

const logs_view = (req, res) => {
    res.render("logs")
}

module.exports = {
    admindashboard_view, usermanagement_view, logs_view
}