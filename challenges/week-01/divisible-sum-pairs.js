/* Problem Description:
Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example:
ar = [1, 2, 3, 4, 5, 6]
k = 5
Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6].

Sample Input
STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]

Sample Output
5 */

function divisibleSumPairs(n, k, ar) {
  let count = 0;
    for (let i = 0; i < ar.length; i++) {
      for (let j = i + 1; j < ar.length; j++) {
        if ((ar[i] + ar[j]) % k === 0) {
          count += 1;
      }
    }
  }
  return count;
}
