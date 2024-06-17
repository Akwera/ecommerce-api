const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('ecommerce_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' ,
    define:{timestamps:true},
    
  });
  

  const syncModels = async () => {
    await dbConnection.sync({ force: true });
  };


  module.exports = { dbConnection, syncModels }