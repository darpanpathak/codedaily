// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const left = new Array(height.length);
  const right = new Array(height.length);
  let total = 0;

  left[0] = height[0];
  for (i = 1; i < height.length; i++) {
    left[i] = Math.max(height[i], left[i - 1]);
  }

  right[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(height[i], right[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    total += Math.min(left[i], right[i]) - height[i];
  }

  return total;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([1]));
