// 345. Reverse Vowels of a String
// Easy

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (s.length === 1) {
    return s;
  }

  const arr = s.split('');
  let i = 0;
  let j = arr.length - 1;

  const vowels = new Map();
  vowels.set('a', 1);
  vowels.set('e', 1);
  vowels.set('i', 1);
  vowels.set('o', 1);
  vowels.set('u', 1);
  vowels.set('A', 1);
  vowels.set('E', 1);
  vowels.set('I', 1);
  vowels.set('O', 1);
  vowels.set('U', 1);

  while (i < j) {
    if (vowels.get(arr[i]) && vowels.get(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }

    while (i < j && !vowels.get(arr[i])) {
      i++;
    }

    while (i < j && !vowels.get(arr[j])) {
      j--;
    }
  }

  return arr.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
console.log(reverseVowels('l'));
console.log(reverseVowels('aA'));
console.log(reverseVowels('aEba'));
