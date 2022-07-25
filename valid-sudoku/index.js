// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

var notInRow = (input, row) => {
  const map = {};
  for (i = 0; i < 9; i++) {
    const cell = input[row][i];
    if (cell != '.') {
      if (map[cell]) {
        return false;
      } else {
        map[cell] = 1;
      }
    }
  }

  return true;
};
var notInCol = (input, col) => {
  const map = {};
  for (i = 0; i < 9; i++) {
    const cell = input[i][col];
    if (cell != '.' && map[cell]) {
      return false;
    } else {
      map[cell] = 1;
    }
  }

  return true;
};

var notInBox = (input, row, col) => {
  const map = {};

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      const cell = input[i + row][j + col];
      if (cell != '.' && map[cell]) {
        return false;
      } else {
        map[cell] = 1;
      }
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (
        !notInRow(board, i) ||
        !notInCol(board, j) ||
        !notInBox(board, i - (i % 3), j - (j % 3))
      ) {
        return false;
      }
    }
  }

  return true;
};

const InputForValid = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const InputForInValid = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '5', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(InputForValid));
console.log(isValidSudoku(InputForInValid));

var isValidSudoku = function (board) {
  let rows = {};
  let cols = {};
  let boxs = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let num = board[r][c];

      if (num === '.') continue;

      let grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!rows[r]) rows[r] = new Set();
      if (!cols[c]) cols[c] = new Set();
      if (!boxs[grid]) boxs[grid] = new Set();

      if (rows[r].has(num) || cols[c].has(num) || boxs[grid].has(num)) {
        return false;
      }

      rows[r].add(num);
      cols[c].add(num);
      boxs[grid].add(num);
    }
  }

  //if there is no repetion that mean the sodoku is valid retrun true
  return true;
};
