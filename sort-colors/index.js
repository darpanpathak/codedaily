// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = (low = 0);
  let high = nums.length - 1;

  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    }
  }

  return nums;
};

console.log(`Result :: ${sortColors([1, 2, 0])}`);
console.log(`Result :: ${sortColors([2, 0, 2, 1, 1, 0])}`);
console.log(`Result :: ${sortColors([2, 0, 1])}`);
