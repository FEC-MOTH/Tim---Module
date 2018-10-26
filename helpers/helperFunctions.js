const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

const getZapposApi = (callback) => {
  const options = {
    url: 'fill in ZapposApi',
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`,
    },
  };

  request(options, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data.body);
    }
  });
};
