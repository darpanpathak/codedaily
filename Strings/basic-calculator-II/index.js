// 227. Basic Calculator II
// Medium

// Given a string s which represents an expression, evaluate this expression and return its value. 

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

const isDigit = (char) => {
    return char >= 0 && char <= 9;
}


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const stack = [];
    let curr = 0;
    let op = "+";
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (isDigit(char)) {
            curr = Number(curr + char);
        }

        if ((!isDigit(char) && char != " ") || i === s.length - 1) {

            switch (op) {
                case "+": {
                    stack.push(curr);
                    break;
                }
                case "-": {
                    stack.push(-(curr));
                    break;
                }
                case "*": {
                    const last = stack.pop();
                    stack.push(last * curr);
                    break;
                }
                case "/": {
                    const last = stack.pop();
                    const mul = last < 0 ? -1 : 1;

                    stack.push(mul * Math.floor((mul * last) / curr));
                    break;
                }
            }

            op = char;
            curr = 0;
        }
    }

    while (stack.length > 0) {
        sum += stack.pop();
    }

    return sum;
};

console.log(calculate("14-3/2"));
console.log(calculate("0-2147483647"));
console.log(calculate("    99  "));
console.log(calculate("2048"));
console.log(calculate("3+2*2"));
console.log(calculate(" 3+5 / 2 "));