const express = require("express")
const authRoutes = express.Router()
authRoutes.post("/login", (req, res) => {
    res.send("Login Page")
})
module.exports = authRoutes

