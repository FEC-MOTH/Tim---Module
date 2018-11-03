// const request = require('request');
// const config = require('../config.js');
// const db = require('../database/index.js');

// const getZapposApi = (callback) => {
//   const options = {
//     url: 'fill in ZapposApi',
//     headers: {
//       'User-Agent': 'request',
//       Authorization: `token ${config.TOKEN}`,
//     },
//   };

//   request(options, (err, data) => {
//     if (err) {
//       console.log(err);
//       callback(err);
//     } else {
//       callback(null, data.body);
//     }
//   });
// };

function ratingToStarTranslation(rating) {
  const arr = Array(5).fill('0%');
  const decimal = 1 - (Math.ceil(rating) - rating).toFixed(1);
  for (let i = 0; i < Math.ceil(rating); i++) {
    if (i === Math.ceil(rating) - 1) {
      arr[i] = `${(decimal * 100).toString()}%`;
    } else {
      arr[i] = '100%';
    }
  }
  return arr;
}

module.exports = { ratingToStarTranslation };
