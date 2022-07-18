// This problem was asked by Amazon.

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// Solution 1 with predefined steps
var climbStairs = function (n, map = {}) {
  if (map[n]) return map[n];

  if (n < 0) {
    return 0;
  }

  if (n === 0) return 1;

  map[n] = climbStairs(n - 1, map) + climbStairs(n - 2, map);

  return map[n];
};

// Solution 2 with dynamic steps
const climbStairs = (n, steps, set = {}) => {
  if (n in set) return set[n];
  if (n < 0) return 0;
  if (n === 0) return 1;

  for (const step of steps) {
    if (step <= n) {
      set[n] = (set[n] || 0) + climbStairs(n - step, steps, set);
    }
  }

  return set[n] || 0;
};

console.log(climbStairs(5, [1, 4, 5]));
