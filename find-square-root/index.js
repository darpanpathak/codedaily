// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 0;
  let high = x;
  let s = 0;

  if (x < 2) {
    return x;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midSqr = mid * mid;

    if (midSqr === x) {
      s = mid;
      break;
    }

    if (midSqr > x) {
      high = mid - 1;
    } else {
      s = mid;
      low = mid + 1;
    }
  }

  return Math.floor(s);
};

console.log(mySqrt(16));
console.log(mySqrt(8));
console.log(mySqrt(244));
