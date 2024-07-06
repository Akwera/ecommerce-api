//endpoints
const express = require("express");
//convert to json
const bodyParser = require("body-parser");
const { dbConnection, syncModels } = require("./connection");
const VendorModel = require("./vendor/model");
const ProductModel = require("./products/model");

// syncModels();

require("dotenv").config();
//json response small
const compression = require("compression");
const authRoutes = require("./auth/routes");
const productRoutes = require("./products/routes");
const vendorRoutes = require("./vendor/routes");
const validationToken = require("./middleware/validateToken");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
const PORT = process.env.PORT;

dbConnection
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome Ninjas</h1>");
});

VendorModel.hasMany(ProductModel, { foreignKey: "vendorId" });
ProductModel.belongsTo(VendorModel, { foreignKey: "vendorId", as: "vendor" });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", validationToken, productRoutes);
app.use("/api/v1/vendors", validationToken, vendorRoutes);

app.listen(PORT, () => {
  console.log("app running on port:" + PORT);
});
