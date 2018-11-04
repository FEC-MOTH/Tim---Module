const exportObj = {
  // to generate highlights
  highlights: [
    [
      ['runner type', 'Neutral shoes for the ultimate running experience'],
      [
        'lightweight comfort',
        'adidas Primeknit upper wraps the foot in adaptive support and ultralight comfort',
      ],
      [
        'enrgize cushioning',
        'Boost is our most responsive cushioning ever: The more energy you give, the more you get',
      ],
      [
        'natural movement',
        'Fitcounter molded heel counter provides a natural fit that allows optimal movement of the Achilles',
      ],
      [
        'reliable traction',
        'Stretchweb outsole flexes naturally for an energized ride, while Continental™ Rubber gives you superior traction',
      ],
    ],
  ],
  // for images
  snapShotImg: [
    'https://www.adidas.com/glass/assets/img/illustrations/running-urban-big.svg',
    'https://www.adidas.com/glass/assets/img/illustrations/running-longrun-big.svg',
    'https://www.adidas.com/glass/assets/img/illustrations/running-midsoftground-big.svg',
    'https://www.adidas.com/glass/assets/img/illustrations/running-neutral-big.svg',
  ],
};

// to generate stars
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
module.exports = { exportObj };
