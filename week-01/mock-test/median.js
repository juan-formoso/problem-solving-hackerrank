/* Problem Description:
"Find the median"

The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before.
Given a list of numbers with an odd number of elements, find the median?

Example:
arr = [5, 3, 1, 2, 4]
The sorted array arr' = [1, 2, 3, 4, 5]. The middle element and the median is 3.

Sample Input:
7
0 1 2 4 6 5 3

Sample Output:
3
*/

function findMedian(arr) {
  let median = Math.floor(arr.length / 2);
  arr = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? arr[median]
    : (arr[median - 1] + arr[median]) / 2;
}
