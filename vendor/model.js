const { dbConnection } = require("../connection");
const { DataTypes } = require("sequelize");
// const { ProductModel } = require("../products/model");
const VendorModel = dbConnection.define(
  "VendorModel",
  {
    vendorId: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    vendorName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    shopName: {
      type: DataTypes.STRING(13),
      allowNull: false,

      // allowNull defaults to true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    dbConnection,
    tableName: "vendors",
  }
);

module.exports = VendorModel;
