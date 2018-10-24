const express = require ('express');
const dbModel = require('../database/models.js')

const Controller = {
  get: (req, res) => {
    res.send('hello from get');
  },

  post: (req, res) => {
    res.send('hello from post');
  },

  update: (req, res) => {
    res.send('hello from update');
  },

  delete: (req, res) => {
    res.send('hello from delete');
  }
};



module.exports = { Controller }