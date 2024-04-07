const { Sequelize, DataTypes } = require('sequelize');
const employeeDetailsModel = require('./employeeDetailsModel');
require('dotenv').config();

// Create a Sequelize instance with MySQL as the dialect
const sequelize = new Sequelize('my_attendance_db', 'root', '', {
  host: 'localhost',
  dialect: process.env.DB_DIALECT_POSTGRES
});

try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.admin_table = require("./admin_table")(sequelize,DataTypes);
db.EmployeeDetails = require("./employeeDetailsModel")(sequelize,Sequelize.DataTypes);
db.EmployeeLoginDetails = require("./employeeLoginModel")(sequelize,DataTypes);

db.EmployeeDetails.hasMany(db.EmployeeLoginDetails);
db.EmployeeLoginDetails.belongsTo(db.EmployeeDetails);




db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync().then();
module.exports = db;

