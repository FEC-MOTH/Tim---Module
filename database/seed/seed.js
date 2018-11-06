const { fake } = require('faker');
const db = require('../models');

const runningShoes = require('./fakeAdidasData/runningShoes.json');
const runningApperal = require('./fakeAdidasData/runningApperal.json');
const basketballShoes = require('./fakeAdidasData/basketballShoes.json');
const accessories = require('./fakeAdidasData/accessories.json');
const footballCleats = require('./fakeAdidasData/footballCleats.json');

/*
1 - 10 = basketball shoes
11-20 = football shoes
21-30 = sandles and slides
31-40 = soccer
41-50 = original shoes
51-60 = hoodies and sweater
61-70 = running shoes *
71-80 = pants
81-90 = bags and backpacks
91-100 = hats and beanies
*/

const describeRun = ['regular fit', 'lace closure', 'adidas primeknit textile upper', 'responsive'];
const describeBball = [
  'Regular fit with a mid-cut',
  'Cable lacing system with webbing eyelets',
  'Textile mesh upper with lightweight, durable Forgefiber',
  'Rubber outsole with enhanced traction pattern; Geofit padded collar',
  'TPU shank in midfoot for stability and torsion control',
  'Flexible Bounce midsole cushioning',
];
const describeFBall = [
  'Anatomical lace closure',
  'Sprintskin upper',
  'Compression-molded EVA lining',
  'Speed Spat seam tape',
];
const describeApperal = [
  'Regular fit strikes a comfortable balance between loose and snug',
  'This jacket is made with recycled polyester to save resources and decrease emissions',
  'We partner with the Better Cotton Initiative to improve cotton farming globally',
];
const describeAcc = [
  'Reflective details',
  'Medium pre-curved brim',
  'I am seriously overdoing this...',
  'this DB is getting out of hands',
];

const mockSpecifications = (...args) => {
  const tempArr = [];
  const returnArr = [];
  args.forEach((valueArr) => {
    valueArr.forEach((value) => {
      tempArr.push(value);
    });
  });

  // to get 6 elements of arr
  const shuffled = tempArr.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  selected.map((value) => {
    returnArr.push(value);
  });
  return returnArr;
};

const fakeDataGenerator = (arr, n) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, n);
  selected.forEach((value) => {
    db.Products.create({
      item_name: value.title,
      category_name: 'athletic',
      product_type: 'accessories',
      description: value.description,
      specification: JSON.stringify(
        mockSpecifications(describeRun, describeBball, describeFBall, describeApperal, describeAcc),
      ),
      catchphrase: 'Looking good while sucking!',
      price: value.price,
      image: JSON.stringify(value.images),
    });
  });
};

fakeDataGenerator(runningShoes, 40);
fakeDataGenerator(runningApperal, 25);
fakeDataGenerator(basketballShoes, 20);
fakeDataGenerator(footballCleats, 15);
fakeDataGenerator(accessories, 15);

/*
Example Schema;

{ title: 'ULTRABOOST Shoes',
  id: 'BA8842',
  price: 18000,
  currency: 'USD',
  urlTo: 'http://www.adidas.com/us/ultraboost-shoes/BA8842.html',
  sizes: [ '6.5', '7', '7.5', '12', '12.5', '13', '14', '15' ],
  description:
   "Feel the power of your best run in these men's running shoes built with ultra-cushioned boost™ underfoot and a foot-hugging upper. The midsole propels you forward using the energy from your footstrike for a light, fast ride that doesn't pack down over time. An adidas Primeknit upper adapts to the changing shape of your foot through the gait cycle, and a supportive cage secures a lockdown fit. The elastic STRETCHWEB outsole flexes to adapt to the way your foot hits the ground.",
  images:
   [ { id: 'dw773341ba', fileName: 'BA8842_01_standard.jpg' },
     { id: 'dwa1a41100', fileName: 'BA8842_02_standard.jpg' },
     { id: 'dwba3c7ca9', fileName: 'BA8842_03_standard.jpg' },
     { id: 'dw78a9db39', fileName: 'BA8842_04_standard.jpg' },
     { id: 'dw1a4d7341', fileName: 'BA8842_05_standard.jpg' },
     { id: 'dwe5300a38', fileName: 'BA8842_41_detail.jpg' },
     { id: 'dwddcd94e3', fileName: 'BA8842_42_detail.jpg' },
     { id: 'dw1a79d952', fileName: 'BA8842_43_detail.jpg' }
    ]
  }
*/
