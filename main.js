//easy
function average(array) {
  let total = 0;
  for (let arrayLoop = 0; arrayLoop < array.length; arrayLoop++) {
    total = total + array[arrayLoop];
  }
  return total / array.length;
}
// console.log(average([1, 4, 7]));
// console.log(average([10, 5]));
// console.log(average([1.5, 3, 2.5, 1]));
// Medium
// const array = [3, 5, 9, 7, 3, 2, 8, 4];
// function findNumber(num) {
//   for (let numLoop = 0; numLoop < array.length; numLoop++) {
//     if (num === array[numLoop]) {
//       return numLoop;
//     }
//   }
//   return -1;
// }
// console.log(findNumber(11));
// New Medium
const arrays = [3, 5, 9, 7, 3, 2, 8, 4];
function findNumber(num) {
  return arrays.indexOf(num);
}
console.log(findNumber(2));
//very hard
function change(coin, total) {
  const newArray = new Array(total + 1).fill(Infinity);
  newArray[0] = 0;
  for (let c of coin) {
    for (let i = 0; i < newArray.length; i++) {
      if (c <= i) {
        let index = i - c;
        let amount = newArray[index] + 1;
        newArray[i] = Math.min(amount, newArray[i]);
      }
    }
  }
  return newArray[newArray.length - 1] === Infinity
    ? -1
    : newArray[newArray.length - 1];
}
console.log(change([1, 2, 5], 11));
