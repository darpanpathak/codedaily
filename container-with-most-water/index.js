// Problem :: https://leetcode.com/problems/container-with-most-water/

// Time Complexity: O(n^2)
// Space Complexity: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaOn2 = function (height) {
  let area = 0;

  if (height.length === 2) {
    return calculateArea(height[0], height[1], 1);
  }

  for (let i = 0; i < height.length; i++) {
    for (j = i; j < height.length; j++) {
      if (i !== j) {
        const left = height[i];
        const right = height[j];

        const currentArea = calculateArea(left, right, j - i);

        if (area < currentArea) {
          area = currentArea;
        }
      }
    }
  }

  return area;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
// Two pointer approch

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let area = calculateArea(height[left], height[right], right - left);
  while (left < right) {
    const leftNum = height[left];
    const rightNum = height[right];

    leftNum > rightNum ? right-- : left++;

    const currentArea = calculateArea(
      height[left],
      height[right],
      right - left
    );

    if (currentArea > area) {
      area = currentArea;
    }
  }

  return area;
};

const calculateArea = (left, right, distance) => {
  const min = Math.min(left, right);
  return min * distance;
};

const heights = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  [1, 2, 3],
  [1, 1],
  [1, 9, 1],
  [8, 0],
];
heights.forEach((height) => console.log(maxArea(height)));
