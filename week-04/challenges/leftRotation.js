/* Problem Description:

A left rotation operation on an array of size  shifts each of the array's elements 1 unit to the left. Given an integer, d, rotate the array that many steps left and return the result.

Example
d = 2
arr = [1, 2, 3, 4, 5]
After 2 rotations, arr' = [3, 4, 5, 1, 2]
*/

function rotateLeft(d, arr) {
  while (d) {
    arr.push(arr.shift());
    d -= 1;
  }
  return arr;
}
