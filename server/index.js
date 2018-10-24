const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path')

const db = require('../database/index.js');
const router = require('./routes');

const server = express();
const port = 1128;

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname,'../client/dist')));

server.use('/shoedidas', router);

server.listen(port, () => console.log(`listening on ${port}`));
