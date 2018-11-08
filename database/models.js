const Sequelize = require('sequelize');
const dbConnection = require('./index.js');

/*


1 - 10 = basketball shoes
11-20 = football shoes
21-30 = sandles and slides
31-40 = soccer
41-50 = original shoes
51-60 = hoodies and sweater
61-70 = running shoes
71-80 = pants
81-90 = bags and backpacks
91-100 = hats and beanies
*/

// product details

const Products = dbConnection.define(
  'productDetails',
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    item_name: { type: Sequelize.STRING },
    category_name: { type: Sequelize.STRING },
    product_type: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING(1000) },
    specification: { type: Sequelize.STRING(1000) },
    catchphrase: { type: Sequelize.STRING },
    product_details: { type: Sequelize.STRING },
    price: { type: Sequelize.INTEGER },
    image: { type: Sequelize.STRING(1000) },
  },

  {
    timestamps: false,
  },
);

Products.sync()
  .then(() => console.log('Data created'))
  .catch(err => console.error(err));

module.exports = { Products };
