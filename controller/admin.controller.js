

const home_view = (req, res) => {
    res.render("admin/home")
}


const addstaff_view = (req, res) => {
    res.render("admin/addstaff")
}


const view_view = (req, res) => {
    res.render("admin/view")
}

const update_view = (req, res) => {
    res.render("admin/update")
}


module.exports = {
    home_view,
    addstaff_view,
    view_view,
    update_view



}