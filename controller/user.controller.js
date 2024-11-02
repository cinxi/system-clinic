const models = require("../models")

const login_view = (req, res) => {
    res.render("login")
}

const register_view = (req, res) => {
   const message  = req.query.message
    res.render("register" , {message})
}

const save_user = (req, res) => {
    const ConfirmPassword_data = req.body.ConfirmPassword_data;

    const user_data = {
        FirstName: req.body.firstName_data,
        LastName: req.body.lastName_data,
        Users_Birthdate: req.body.birthdate_data,
        Users_Gender: req.body.gender_data,
        ContactNumber: req.body.contactNumber_data,
        User_Role: req.body.role,
        Username: req.body.Username_data,
        Password: req.body.Password_data
    };

    console.log(user_data);
    console.log(ConfirmPassword_data);

    // Validate password confirmation
    if (ConfirmPassword_data !== user_data.Password) {
        return res.redirect("register?message=wrongPassword");
    }

    // Insert to database
    models.user.create(user_data)
        .then(result => {
            res.redirect("register?message=Success");
        })
        .catch(error => {
            console.error("Database insertion error:", error);
            res.redirect("register?message=ServerError");
        });
};



module.exports = {
    login_view, register_view, save_user
}