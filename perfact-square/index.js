/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let low = 0;
  high = num;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midSqr = mid * mid;

    if (midSqr === num) {
      return true;
    }

    if (midSqr > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(244));
console.log(isPerfectSquare(900));
console.log(isPerfectSquare(9));
