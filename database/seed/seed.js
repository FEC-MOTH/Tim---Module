const { fake } = require('faker');
const db = require('../models');

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
