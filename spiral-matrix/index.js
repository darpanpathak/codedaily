// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {

//     const outputArr = [];
//     let prevOp = "";
//     let row = 0;
//     let col = 0;
//     const totalRows = matrix.length;
//     const totalCols = matrix[0].length;
//     for (let i = 0; i < totalRows * totalCols; i++) {

//         if (prevOp === "") {
//             outputArr.push(matrix[row][col]);
//             matrix[row][col] = undefined;
//             prevOp = "LR";
//         }

//         if (prevOp === "LR" && matrix[row][col + 1] != undefined) {
//             outputArr.push(matrix[row][col + 1]);
//             matrix[row][col + 1] = undefined;
//             col = col + 1;
//             prevOp = "LR";
//         } else if (prevOp === "LR" && row < totalRows - 1 && matrix[row + 1][col] != undefined) {
//             outputArr.push(matrix[row + 1][col]);
//             matrix[row + 1][col] = undefined;
//             row = row + 1;
//             prevOp = "TB";
//         }

//         if (prevOp === "TB" && row < totalRows - 1 && matrix[row + 1][col] != undefined) {
//             outputArr.push(matrix[row + 1][col]);
//             matrix[row + 1][col] = undefined;
//             row = row + 1;
//             prevOp = "TB";
//         } else if (prevOp === "TB" && matrix[row][col - 1] != undefined) {
//             outputArr.push(matrix[row][col - 1]);
//             matrix[row][col - 1] = undefined;
//             col = col - 1;
//             prevOp = "RL";
//         }

//         if (prevOp === "RL" && matrix[row][col - 1] != undefined) {
//             outputArr.push(matrix[row][col - 1]);
//             matrix[row][col - 1] = undefined
//             col = col - 1;
//             prevOp = "RL";
//         } else if (prevOp === "RL" && row > 0 && matrix[row - 1][col] != undefined) {
//             outputArr.push(matrix[row - 1][col]);
//             matrix[row - 1][col] = undefined;
//             row = row - 1;
//             prevOp = "BT";
//         }

//         if (prevOp === "BT" && row > 0 && matrix[row - 1][col] != undefined) {
//             outputArr.push(matrix[row - 1][col]);
//             matrix[row - 1][col] = undefined;
//             row = row - 1;
//             prevOp = "BT";
//         } else if (prevOp === "BT" && matrix[row][col + 1] != undefined) {
//             outputArr.push(matrix[row][col + 1]);
//             matrix[row][col + 1] = undefined;
//             col = col + 1;
//             prevOp = "LR";
//         }
//     }

//     return outputArr;
// };

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // dir => 0 = L -> R, 1 = T -> B, 2 = R -> L, 3 = B -> T
  let dir = 0;
  let top = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  const outputArr = [];

  let count = 0;
  while (top <= down && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        outputArr.push(matrix[top][i]);
      }

      top += 1;
    }

    if (dir === 1) {
      for (let i = top; i <= down; i++) {
        outputArr.push(matrix[i][right]);
      }

      right -= 1;
    }

    if (dir === 2) {
      for (let i = right; i >= left; i--) {
        outputArr.push(matrix[down][i]);
      }

      down -= 1;
    }

    if (dir === 3) {
      for (let i = down; i >= top; i--) {
        outputArr.push(matrix[i][left]);
      }

      left += 1;
    }

    dir = (dir + 1) % 4;
  }

  return outputArr;
};

console.log(
  spiralOrder([
    [2, 5],
    [8, 4],
    [0, -1],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(spiralOrder([[1, 2, 3, 4]]));
console.log(spiralOrder([[1]]));
