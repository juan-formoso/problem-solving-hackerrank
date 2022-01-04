function flippingMatrix(matrix) {
  let n = matrix.length / 2;
  let max = 0;
  let sum = 0;
  for (let row = 0; row < n; row += 1) {
    for (let column = 0; column < n; column += 1) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][column], max);
      max = Math.max(matrix[row][2 * n - column - 1], max);
      max = Math.max(matrix[2 * n - row - 1][column], max);
      max = Math.max(matrix[2 * n - row - 1][2 * n - column - 1], max);
      sum += max;
    }
  }
  return sum;
}
