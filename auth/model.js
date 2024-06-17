const {  DataTypes } = require('sequelize');
const {dbConnection} = require("../connection");


const UserModel = dbConnection.define(
  'UserModel',
  {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        type: DataTypes.ENUM("admin","vendor","customer"),
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
    indexes: [{ unique: true, fields: ["username"] }],

  },
);

module.exports = UserModel;