// The triangle below is known as Pascal’s triangle.

// In this triangle, the value at a position is equal to the sum of values of the 2 elements just above it.

// Examples
// The 2nd element of 5th row is 1+3 => 4
// The 3rd element of 5th row is 3+3 => 6
// The 4th element of 5th row is 3+1 => 4
// For the leftmost and the rightmost position in each row, the value is 1. The element in the first row is also 1.

// Given a number n, find the nth row of pascal’s triangle.

function pascalTriangleRow(rowNo) {
  let floor1 = [];
  let floor2 = [];

  for (let i = 0; i < rowNo; i++) {
    if (i === 0) {
      floor2 = [1];
    } else {
      floor2.push(1);
      for (let j = 0; j < floor1.length - 1; j++) {
        floor2.push(floor1[j] + floor1[j + 1]);
      }
      floor2.push(1);
    }
    floor1 = floor2;
    floor2 = [];
  }

  return floor1;
}

console.log(pascalTriangleRow(6));
