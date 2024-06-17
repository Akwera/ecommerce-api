const express = require("express");
const controller = require("./controller");
const authRoutes = express.Router();
authRoutes.post("/login", controller.login);
authRoutes.post("/register", controller.register);
authRoutes.get("/users/:id", controller.getUserById)
authRoutes.delete("/users/:id", controller.deleteUserById)
authRoutes.get("/users/", controller.getUsers)
module.exports = authRoutes;
