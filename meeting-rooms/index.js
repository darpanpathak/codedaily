// Given an 2D integer array A of size N x 2 denoting time intervals of different meetings.

// Where:

// A[i][0] = start time of the ith meeting.
// A[i][1] = end time of the ith meeting.
// Find the minimum number of conference rooms required so that all meetings can be done.

// Problem Constraints
// 1 <= N <= 10

// 0 <= A[i][0] < A[i][1] <= 2 * 109

// Input Format
// The only argument given is the matrix A.

// Output Format
// Return the minimum number of conference rooms required so that all meetings can be done.

// Example Input
// Input 1:

//  A = [      [0, 30]
//             [5, 10]
//             [15, 20]
//      ]

// Input 2:

//  A =  [     [1, 18]
//             [18, 23]
//             [15, 29]
//             [4, 15]
//             [2, 11]
//             [5, 13]
//       ]

// Example Output
// Output 1:

//  2
// Output 2:

//  4

// Example Explanation
// Explanation 1:

//  Meeting one can be done in conference room 1 form 0 - 30.
//  Meeting two can be done in conference room 2 form 5 - 10.
//  Meeting three can be done in conference room 2 form 15 - 20 as it is free in this interval.
// Explanation 2:

//  Meeting one can be done in conference room 1 from 1 - 18.
//  Meeting five can be done in conference room 2 from 2 - 11.
//  Meeting four can be done in conference room 3 from 4 - 15.
//  Meeting six can be done in conference room 4 from 5 - 13.
//  Meeting three can be done in conference room 2 from 15 - 29 as it is free in this interval.
//  Meeting two can be done in conference room 4 from 18 - 23 as it is free in this interval.

// const noOfConfRooms = (input) => {
//     let confRoom = 0;
//     const max = input.reduce((acc, val) => Math.max(acc, ...val), 0);
//     const arr = new Array(max).fill(0);

//     for (let meeting of input) {
//         for (let j = meeting[0]; j < meeting[1]; j++) {
//             arr[j] += 1;
//             if (confRoom < arr[j]) {
//                 confRoom += 1;
//             }
//         }
//     }

//     return confRoom;
// };

const noOfConfRooms = (input) => {
  let confRoom = 0;
  let startArr = [];
  let endArr = [];
  let count = 0;

  for (let meeting of input) {
    startArr.push(meeting[0]);
    endArr.push(meeting[1]);
  }

  startArr.sort((a, b) => a - b);
  endArr.sort((a, b) => a - b);

  let i = (j = 0);

  while (i <= startArr.length - 1 || j < startArr.length - 1) {
    if (startArr[i] < endArr[j]) {
      confRoom++;
      i++;

      if (count < confRoom) {
        count = confRoom;
      }
    } else {
      confRoom--;
      j++;
    }
  }

  return count;
};

console.log(
  noOfConfRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

console.log(
  noOfConfRooms([
    [1, 18],
    [18, 23],
    [15, 29],
    [4, 15],
    [2, 11],
    [5, 13],
  ])
);
