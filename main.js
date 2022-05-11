//easy
// function average(array) {
//   let total = 0;
//   for (let arrayLoop = 0; arrayLoop < array.length; arrayLoop++) {
//     total = total + array[arrayLoop];
//   }
//   return total / array.length;
// }
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
//hard
window.updateTheBackground = function (className) {};
