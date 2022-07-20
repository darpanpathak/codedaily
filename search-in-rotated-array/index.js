// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, low = 0, high = nums.length - 1) {
  if (nums.length < 1 || high < low) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (nums[mid] === target) {
    return mid;
  }

  if (nums[low] <= nums[mid]) {
    if (target >= nums[low] && target <= nums[mid]) {
      return search(nums, target, low, mid - 1);
    } else {
      return search(nums, target, mid + 1, high);
    }
  }

  if (target >= nums[mid] && target <= nums[high]) {
    return search(nums, target, mid + 1, high);
  }

  return search(nums, target, low, mid - 1);
};
