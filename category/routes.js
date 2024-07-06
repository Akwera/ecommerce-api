const express = require("express");
const controller = require("./controller");
const categoryRoutes = express.Router();

categoryRoutes.put("/:id", controller.updateCategoryById);
categoryRoutes.get("/:id", controller.getCategory);
categoryRoutes.delete("/:id", controller.deleteCategoryById);
categoryRoutes.get("/", controller.getAllCategory);
categoryRoutes.post("/", controller.createCategory);

module.exports = categoryRoutes;
