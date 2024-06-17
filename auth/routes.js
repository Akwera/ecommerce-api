const express = require("express")
const login = require("./controller")
const authRoutes = express.Router()
authRoutes.post("/login", login)
module.exports = authRoutes

