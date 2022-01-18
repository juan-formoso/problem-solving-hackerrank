/* Problem Description:

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
  1. The elements of the first array are all factors of the integer being considered
  2. The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example:
a = [2, 6]
b = [24, 36]

There are two numbers between the arrays: 6 and 12.
6 % 2 = 0,6 % 6 = 0,24 % 6 = 0 and 36 % 6 = 0 the first value.
12 % 2 = 0,12 % 6 = 0,24 % 12 = 0,36 % 12 = 0 the second value.
*/

function getTotalX(a, b) {
  let count = 0;
  for (let x = 1; x <= 100; x += 1) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        count += 1;
      }
    }
  }
  return count;
}
