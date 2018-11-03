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
