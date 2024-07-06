const express = require("express");
const controller = require("./controller");
const vendorRoutes = express.Router();

vendorRoutes.put("/:id", controller.updateVendorById);
vendorRoutes.get("/:id", controller.getVendor);
vendorRoutes.get("/products/:id", controller.getVendorProducts);
vendorRoutes.delete("/:id", controller.deleteVendorById);
vendorRoutes.get("/", controller.getVendors);
vendorRoutes.post("/", controller.createVendor);


module.exports = vendorRoutes;
