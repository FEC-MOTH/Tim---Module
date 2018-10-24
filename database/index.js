const mysql = require('mysql');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('fec', 'root', 'timtran' , {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then (() => console.log('connect to mysql!'))
  .catch(err => console.error(err));

module.exports = sequelize; 