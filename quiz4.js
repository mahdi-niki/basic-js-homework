// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number (hint: use parseInt())
// todo3: remove all the items that are NaN: (hint: use isNaN())
// todo4: calculate the sum of all its numbers
// !Answer:

const number = ["1", "100", "-9", "", true, null]; //todo1

function convert(array) {
  const num = []; //todo2
  for (let i = 0; i < array.length; i++) {
    num.push(parseInt(array[i]));
  }
  const removeNum = []; //todo3
  for (let i = 0; i < num.length; i++) {
    if (isNaN(num[i]) !== true) {
      removeNum.push(num[i]);
    }
  }
  let sum = 0; //todo4
  for (let i = 0; i < removeNum.length; i++) {
    sum += removeNum[i];
  }
  return sum
}
let sumNum= convert(number) 
console.log(sumNum) 