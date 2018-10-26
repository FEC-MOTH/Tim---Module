const { fake } = require('faker');
const db = require('../models');

// console.log(fake('{{commerce.department}}'));
// const Products = dbConnection.define('products',
//   {
//     id              : { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//     item_name       : { types: Sequelize.STRING },
//     category_name   : { type: Sequelize.STRING },
//     product_type    : { type: Sequelize.STRING },
//     description     : { type: Sequelize.STRING },
//     product_details : { type: Sequelize.STRING },
//     image           : { type: Sequelize.STRING }
//   },

const fakeProducts = [
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
  {
    item_name: fake('{{name.jobDescriptor}}'),
    category_name: fake('{{commerce.productName}}'),
    product_type: fake('{{address.state}}'),
    description: fake('{{lorem.paragraph}}'),
    product_details: fake('{{commerce.productAdjective}}'),
    image: fake('{{image.sports}}'),
  },
];

const fakeDataGenerator = (arr) => {
  arr.forEach((value) => {
    db.Products.create({
      item_name: value.item_name,
      category_name: value.category_name,
      product_type: value.product_type,
      description: value.description,
      product_details: value.product_details,
      image: value.image,
    });
  });
};

fakeDataGenerator(fakeProducts, 9);
