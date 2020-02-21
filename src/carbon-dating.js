const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(num) {
  if ((typeof num == "string")) {
    num = num.split('.').length > 1 ? num.split('.')[0] + '.' + num.split('.')[1] : num;
    if (
      ((parseInt(num) == num) || parseFloat(num) == num) &&
      ((parseFloat(num) > 0) && (parseFloat(num) <= 15))
    ) {
      num = parseFloat(num);
      return Math.ceil(Math.log(MODERN_ACTIVITY / num) / 0.693 * HALF_LIFE_PERIOD);
    }
  }
  return false;
};