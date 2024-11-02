// const { where } = require("sequelize")
// const models = require("../models")
// const jwt = require("jsonwebtoken")

// const login_view = (req, res) => {
//     res.render("login")
// }

// const register_view = (req, res) => {
//    const message  = req.query.message
//     res.render("register" , {message})
// }

// const save_user = (req, res) => {
//     const ConfirmPassword_data = req.body.ConfirmPassword_data;

//     const user_data = {
//         FirstName: req.body.firstName_data,
//         LastName: req.body.lastName_data,
//         Users_Birthdate: req.body.birthdate_data,
//         Users_Gender: req.body.gender_data,
//         ContactNumber: req.body.contactNumber_data,
//         User_Role: req.body.role,
//         Username: req.body.Username_data,
//         Password: req.body.Password_data
//     };

//     console.log(user_data);
//     console.log(ConfirmPassword_data);

//     // Validate password confirmation
//     if (ConfirmPassword_data !== user_data.Password) {
//         return res.redirect("register?message=wrongPassword");
//     }

//     // Insert to database
//     models.user.create(user_data)
//         .then(result => {
//             res.redirect("register?message=Success");
//         })
//         .catch(error => {
//             console.error("Database insertion error:", error);
//             res.redirect("register?message=ServerError");
//         });
// }


// const login_user = (req, res) => {

//     //step 1 get data from user, email and password

//     const user_data = {
//         username: req.body.username,
//         password: req.body.password
//     }
//     //step 2 check if email exits in our database
//     models.user.findOne({ where: { username: user_data.username }}).then(result => {

//         const user_result = {
//             id: result.id,
//             username: result.username,
//             password: result.password,

//         }



//     //step 3 check if user pass is equal to pass in our database
//     if(user_result.password === user_data.password){

//      //step 4 generate token
     
//    const token =  jwt.sign(user_result, "secretKey")
//     //step 5 set token to our cookie
//     res.cookie("token", token)

//     //step 6 render home
//     res.render("admin/admindashboard");

//     }else {
        
//     res.render("login")
// }
        

    

    
// }).catch(error => {
//     console.log(error)
//     res.render("login")
// })
   


// module.exports = {
//     login_view, register_view, save_user, login_user
// }


// }




///////way error

const { where } = require("sequelize");
const models = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login_view = (req, res) => {
    const message = req.query.message || null; // Default to null if no message is provided
    res.render("login", { message });
};

const register_view = (req, res) => {
    const message = req.query.message;
    res.render("register", { message });
};

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
        Password: req.body.Password_data,
    };

    console.log(user_data);
    console.log(ConfirmPassword_data);

    // Validate password confirmation
    if (ConfirmPassword_data !== user_data.Password) {
        return res.redirect("register?message=wrongPassword");
    }

    // Hash the password before saving to the database
    user_data.Password = bcrypt.hashSync(user_data.Password, 10);

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


const login_user = (req, res) => {
    const user_data = {
        Username: req.body.Username,
        Password: req.body.Password,
    };

    console.log("Login attempt:", user_data);

    // Check if the user exists in the database
    models.user.findOne({ where: { Username: user_data.Username } })
        .then(result => {
            if (!result) {
                return res.render("login", { message: "User not found" });
            }

            // Compare the entered password with the hashed password from the database
            if (bcrypt.compareSync(user_data.Password, result.Password)) {
                // Password is correct, generate token
                const token = jwt.sign({ id: result.id, Username: result.Username }, "secretKey");
                res.cookie("token", token); // Set the token as a cookie
                res.render("admindashboard"); // Redirect to the dashboard
            } else {
                res.render("login", { message: "Invalid password" });
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            res.render("login", { message: "Server error" });
        });
};



module.exports = {
    login_view,
    register_view,
    save_user,
    login_user,
};

