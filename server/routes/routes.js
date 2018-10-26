const Router = require('express').Router();
const { Controller } = require('../controller');

Router.route('/product/details')
  .get(Controller.get)
  .post(Controller.post)
  .put(Controller.update)
  .delete(Controller.delete);

module.exports = Router;
