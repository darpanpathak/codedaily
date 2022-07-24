// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    let count = 0;
    let sum = 0;
    let prefixSumMap = {};

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

        if (sum === k) {
            count++;
        }

        if (prefixSumMap[sum - k]) {
            count += prefixSumMap[sum - k];
        }

        if (prefixSumMap[sum]) {
            prefixSumMap[sum] += 1;
        } else {
            prefixSumMap[sum] = 1;
        }
    }

    return count;
};

// [10, 2, -2, -20, 10]
// [10, 12, 10, -10, 0]

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([10, 2, -2, -20, 10], -10));