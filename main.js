//easy

function average(array) {
  let total = 0;
  for (var arrayLoop = 0; arrayLoop < array.length; arrayLoop++) {
    total = total + array[arrayLoop];
  }
  return total / array.length;
}
console.log(average([1, 4, 7]));
console.log(average([10, 5]));
console.log(average([1.5, 3, 2.5, 1]));
// Medium
