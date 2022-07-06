// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const sum = (numbers, k) => {
  const map = {};
  const pairs = [];

  for (const num of numbers) {
    const temp = k - num;
    if (map[temp]) {
      pairs.push([temp, num]);
    }

    map[num] = 1;
  }

  return pairs.length ? pairs : -1;
};

const inputs = [
  {
    numbers: [10, 15, 3, 7],
    k: 18,
  },
  {
    numbers: [5, 2, 4, 1, 7, 8, 9],
    k: 9,
  },
  {
    numbers: [3, 3],
    k: 6,
  },
];

for (const { numbers, k } of inputs) {
  console.log(sum(numbers, k));
}
