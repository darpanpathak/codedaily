// https://leetcode.com/problems/first-missing-positive/

// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let max = 0;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      map[nums[i]] = 1;
      if (nums[i] > max) {
        max = nums[i];
      }
    }
  }

  max = max + 1;

  for (let i = 1; i <= max; i++) {
    if (!map[i]) {
      return i;
    }
  }
};

const input = [
  [1, 2, 0],
  [3, 4, -1, 1],
  [7, 8, 9, 11, 12],
];

input.forEach((nums) => console.log(firstMissingPositive(nums)));
