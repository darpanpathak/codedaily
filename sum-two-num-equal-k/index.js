// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const sum = (numbers, k) => {
  let left = 0;
  let right = numbers.length - 1;

  if (numbers[left] + numbers[right] === k) {
    return [numbers[left], numbers[right]];
  }

  console.log(left, right);

  while (left < right && left < numbers.length && right >= 0) {
    console.log(`Left ${numbers[left]} & Right ${numbers[right]}`);

    if (numbers[left] + numbers[right] === k) {
      console.log([numbers[left], numbers[right]]);
    }

    if (numbers[left] + numbers[right] > k) {
      if (numbers[left] > numbers[right]) {
        left++;
      } else {
        right--;
      }
    } else {
      if (numbers[left] > numbers[right]) {
        left--;
      } else {
        right++;
      }
    }
  }

  return -1;
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

// for (const { numbers, k } of inputs) {
//   console.log(sum(numbers, k));
// }

sum([5, 2, 4, 1, 7, 8, 9], 9);
