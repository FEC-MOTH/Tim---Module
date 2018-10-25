const mysql = require('mysql');
const Sequelize = require('sequelize');
const { env } = require('../env/.env');

const sequelize = new Sequelize(env.database, env.dbHost, env.dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => console.log('connect to mysql!'))
  .catch(err => console.error(err));

module.exports = sequelize;
