// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

//https://leetcode.com/problems/product-of-array-except-self/

const product = (input) => {
  const outArr = new Array(input.length).fill(1);
  let temp = 1;
  //prefix
  for (let i = 0; i < input.length; i++) {
    outArr[i] = temp;
    temp *= input[i];
  }
  // console.log(outArr);

  temp = 1;
  //postfix
  for (let i = input.length - 1; i >= 0; i--) {
    outArr[i] *= temp;
    temp *= input[i];
  }

  return outArr;
};

const inputs = [
  [1, 2, 3, 4, 5],
  [3, 2, 1],
  [-1, 1, 0, -3, 3],
];

for (const input of inputs) {
  console.log(product(input));
}
