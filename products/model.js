const { dbConnection } = require("../connection");
const { DataTypes } = require("sequelize");
const { VendorModel } = require("../vendor/model");
const ProductsModel = dbConnection.define(
  "ProductModel",
  {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    productName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    category_name: {
      type: DataTypes.STRING(13),
      allowNull: false,

      // allowNull defaults to true
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    measuringUnit: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    vendorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: VendorModel,
        key: "vendorId",
      },
    },
    quantityAvailable: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    dbConnection,
    tableName: "products",
  }
);

module.exports = ProductsModel;
