const express = require("express");
const controller = require("./controller");
const validationToken = require("../middleware/validateToken");
const authRoutes = express.Router();
authRoutes.post("/login", controller.login);
authRoutes.post("/register", controller.register);
authRoutes.put("/update/:id", validationToken, controller.updateUserById);
authRoutes.get("/users/:id", validationToken, controller.getUserById);
authRoutes.delete("/users/:id", validationToken, controller.deleteUserById);
authRoutes.get("/users/", validationToken, controller.getUsers);


module.exports = authRoutes;
