// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (j != nums.length) {
    if (nums[j] != 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }

  while (i != nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
};

console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
console.log(moveZeroes([1, 0, 3, 0, 4, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
