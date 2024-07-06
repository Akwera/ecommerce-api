const { dbConnection } = require("../connection");
const { DataTypes } = require("sequelize");

const CategoryModel = dbConnection.define(
  "CategoryModel",
  {
    categoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    categoryName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    // category_name: {
    //   type: DataTypes.STRING(13),
    //   allowNull: false,

    //   // allowNull defaults to true
    // },
  },
  {
    dbConnection,
    tableName: "categories",
  }
);

module.exports = CategoryModel;
