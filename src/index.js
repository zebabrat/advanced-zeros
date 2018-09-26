module.exports = function getZerosCount(number, base) {
  let zerosCount = number;
  let degreeOfMultiplier;
  let numberOfZerosOfMultiplier;

  for (var i = 2; i <= base; i++) {
    if (base % i === 0) {
      degreeOfMultiplier = 0;   // multipliers degree

      while (base % i === 0) {   // finding multiplier
        base = Math.floor(base / i);
        degreeOfMultiplier++;
      }

      let numberOfMultiplier = number;
      numberOfZerosOfMultiplier = 0; // count zeros

      while (numberOfMultiplier) {
        numberOfZerosOfMultiplier += Math.floor(numberOfMultiplier / i);
        numberOfMultiplier = Math.floor(numberOfMultiplier / i);
      }

      let result = Math.floor(numberOfZerosOfMultiplier / degreeOfMultiplier);
      zerosCount = Math.min(zerosCount, result);
    }
  }
  return zerosCount;
}