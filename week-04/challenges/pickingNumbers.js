/* Problem Description:
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5]

There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.
*/

function pickingNumbers(a) {
  let max = 0;
  let values = new Array(100).fill(0);
  (a || []).forEach((value) => {
    values[value] += 1;
  });
  return values.reduce((target, value, index) => {
    index >= 1 &&
      value + values[index - 1] > target &&
      (target = value + values[index - 1]);
    return target;
  }, []);
}
