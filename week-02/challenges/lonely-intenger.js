function lonelyintenger(a) {
  let uniqueNum = a.filter(function (index) {
    return a.indexOf(index) === a.lastIndexOf(index);
  });
  return uniqueNum[0];
}
