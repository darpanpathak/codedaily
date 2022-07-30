// 14. Longest Common Prefix
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let pref = strs[0];

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < pref.length; j++) {

            if (pref[j] !== strs[i][j]) {
                pref = pref.substring(0,j);
                break;
            }
        }
    }

    return pref;

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));