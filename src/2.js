const input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11];
/** 
*
* @param func {Array} - самое красивое решение
*/
function func(arr) {
  const out = [[], []];

  Object.keys(arr).forEach((a) => {
    if (!(arr[a] % 2)) {
      out[0].push(arr[a]);
    } else {
      out[1].push(arr[a]);
    }
  });

  return (out[0].reverse()).concat(out[1].sort((a, b) => a - b));
}
/** 
*
* @param func2 {Array} - самое быстрое
*/
function func2(arr) {
  return (
    arr.filter((num) => !(num % 2)).reverse()).concat(
    arr.filter((num) => (num % 2)).sort((a, b) => a - b),
  );
}

console.log(func(input)); // [10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9]
console.log(func2(input)); // [10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9]
