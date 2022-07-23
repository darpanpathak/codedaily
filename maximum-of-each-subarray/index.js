// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

// const maxOfSubarray = (nums, k) => {
//     let i = j = 0;
//     const currentWindow = [];
//     const result = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (currentWindow.length < k) {
//             currentWindow.push(nums[i]);
//         }

//         if (currentWindow.length === k) {
//             const max = Math.max(...currentWindow);
//             result.push(max);

//             currentWindow.shift();
//         }
//     }

//     return result;
// }

// console.log(maxOfSubarray([-7, -8, 7, 5, 7, 1, 6, 0], 4))
// console.log(maxOfSubarray([1, -1], 1));
// console.log(maxOfSubarray([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxOfSubarray([10, 5, 2, 7, 8, 7], 3));
// console.log(maxOfSubarray([1], 1));


var maxSlidingWindow = function (nums, k) {
    const res = [];
    const q = []; // keep the current max index in array, desc
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        console.log(q, i)

        // remove smaller tail indexes in queue
        while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);

        // check current max is in range K
        if (q[0] <= i - k) {
            q.shift();
        }

        // calc result
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }

    return res;
};

console.log(maxSlidingWindow([10, 5, 2, 7, 8, 7], 3));