// 347. Top K Frequent Elements
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = map.get(nums[i]);
    if (val) {
      map.set(nums[i], val + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const arr = new Array(nums.length);

  for (let [key, val] of map) {
    if (arr[val]) {
      arr[val].push(Number(key));
    } else {
      arr[val] = [Number(key)];
    }
  }

  const result = [];

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i]) {
      if (arr[i].length > k - result.length) {
        result.push(...arr[i].slice(0, k - result.length));
      } else {
        result.push(...arr[i]);
      }
    }
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([3, 1, 4, 4, 5, 2, 6, 1], 2));
console.log(topKFrequent([7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4));
