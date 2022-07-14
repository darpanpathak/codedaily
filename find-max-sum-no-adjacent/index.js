// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

const findMaxSum = (input) => {
  if (input.length === 1) {
    return input[0];
  }

  let incl = input[0];
  let excl = 0;
  let excl_max = 0;

  for (let i = 1; i < input.length; i++) {
    excl_max = incl > excl ? incl : excl;

    incl = excl + input[i];
    excl = excl_max;
  }

  return incl > excl ? incl : excl;
};

console.log(findMaxSum([2, 4, 6, 2, 5]));
console.log(findMaxSum([5, 1, 1, 5]));
console.log(findMaxSum([5, 5, 10, 100, 10, 5]));
