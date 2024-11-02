const express = require("express")
require("dotenv").config()
const user_router = require("./routes/user.route.js")
const path = require("path")

const app = express()

app.set("view engine", 'ejs') // reg. ejs package
app.use(express.urlencoded({ extended:true })) // send data using form
app.use(express.static(path.join(__dirname, 'public'))) //register static files
app.use(user_router) ///register user router

//create server
 app.listen(process.env.PORT, () => {
    console.log("server started!")
 })
