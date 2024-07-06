const { DataTypes } = require("sequelize");
const { dbConnection } = require("../connection");

const UserModel = dbConnection.define(
  "UserModel",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    role: {
      type: DataTypes.ENUM("admin", "vendor", "customer"),
      allowNull: false,
      // allowNull defaults to true
    },
    phoneNumber: {
      type: DataTypes.STRING(13),
      allowNull: false,

      // allowNull defaults to true
    },
  },
  {
    dbConnection,
    tableName: "users",
    tablespace: false,
    indexes: [{ unique: true, fields: ["userName"] }],
  }
);

const CustomerModel = dbConnection.define(
  "CustomerModel",
  {
    customerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Model attributes are defined here
    customerName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    phoneNumber: {
      type: DataTypes.STRING(13),
      allowNull: false,

      // allowNull defaults to true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    dbConnection,
    tableName: "customers",
  }
);

module.exports = { UserModel, CustomerModel };
