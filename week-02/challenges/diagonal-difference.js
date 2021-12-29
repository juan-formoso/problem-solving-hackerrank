/* Problem Description:
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below
1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.
*/

function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diag1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        diag2 += arr[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
}
