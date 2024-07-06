const express = require("express");
const controller = require("./controller");
const productRoutes = express.Router();

productRoutes.put("/:id", controller.updateProductById);
productRoutes.get("/:id", controller.getProduct);
productRoutes.delete("/:id", controller.deleteProductById);
productRoutes.get("/", controller.getProducts);
productRoutes.post("/", controller.createProduct);
module.exports = productRoutes;
