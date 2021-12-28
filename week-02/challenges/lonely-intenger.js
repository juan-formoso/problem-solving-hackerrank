/* Problem Description:

Given an array of integers, where all elements but one occur twice, find the unique element.

Example:
a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4.

*/

function lonelyintenger(a) {
  let uniqueNum = a.filter(function (index) {
    return a.indexOf(index) === a.lastIndexOf(index);
  });
  return uniqueNum[0];
}
