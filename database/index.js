const mysql = require('mysql');
const Sequelize = require('sequelize');
// const { env } = require('../env/.env');

const sequelize = new Sequelize('fec', 'root', 'timtran', {
  host: 'productDB',
  dialect: 'mysql',

  pool: {
    max: 2,
    min: 0,
    acquire: 30000,
    idle: 5000,
  },
});

sequelize
  .authenticate()
  .then(() => console.log('connect to mysql!'))
  .catch(err => console.error(err));

module.exports = sequelize;

// hey
