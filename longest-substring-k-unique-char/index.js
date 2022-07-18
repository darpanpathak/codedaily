// Given a string you need to print longest possible substring that has exactly M unique characters. If there are more than one substring of longest possible length, then print any one of them.

// Examples:

// "aabbcc", k = 1
// Max substring can be any one from {"aa" , "bb" , "cc"}.

// "aabbcc", k = 2
// Max substring can be any one from {"aabb" , "bbcc"}.

// "aabbcc", k = 3
// There are substrings with exactly 3 unique characters
// {"aabbcc" , "abbcc" , "aabbc" , "abbc" }
// Max is "aabbcc" with length 6.

// "aaabbb", k = 3
// There are only two unique characters, thus show error message.

function longestSubstring(input, k) {
  let i = 0;
  let j = 0;
  let map = {};
  let ans = '';
  let tempAns = '';

  while (true) {
    let firstLoop = false;
    let secondLoop = false;

    while (i < input.length) {
      firstLoop = true;

      if (map[input[i]]) {
        map[input[i]]++;
        tempAns += input[i];
      } else {
        map[input[i]] = 1;
        tempAns += input[i];
      }

      const uniqueChars = Object.keys(map);

      if (uniqueChars.length === k) {
        if (ans.length < tempAns.length) {
          ans = tempAns;
        }
      }

      if (uniqueChars.length > k) {
        i++;
        break;
      }

      i++;
    }

    while (j < i) {
      secondLoop = true;

      if (map[input[j]] && map[input[j]] > 1) {
        map[input[j]]--;
        tempAns = tempAns.substring(1);
      } else {
        delete map[input[j]];
        tempAns = tempAns.substring(1);
      }

      const uniqueChars = Object.keys(map);

      if (uniqueChars.length === k) {
        if (ans.length < tempAns.length) {
          ans = tempAns;
        }
        j++;
        break;
      }

      if (uniqueChars.length < k) {
        j++;
        break;
      }

      j++;
    }

    if (!firstLoop && !secondLoop) {
      break;
    }
  }

  return ans;
}

console.log(longestSubstring('abbccba', 2));
