/**
 * @param {number} num
 * @return {string}
 */

const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const CHARS = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

var intToRoman = function (num) {
  return recursive(num, []);
};

const recursive = (num, results) => {
  if (num > 0) {
    for (let i = 0; i < VALUES.length; i++) {
      const divider = VALUES[i];
      const count = Math.floor(num / divider);
      if (count > 0) {
        results.push(CHARS[i].repeat(count));
        num -= count * divider;
        return recursive(num, results);
      }
    }
  } else {
    return results.join('');
  }
};

const inputs = [8, 19, 1994, 10];

for (const input of inputs) {
  const result = intToRoman(input);
  console.log(`Result :: `, result);
}
