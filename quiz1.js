// ? Question-1:write a function that accepts numbers array as parameter and split negative numbers and positive numbers in two seperated array.
const numbers = [-2, 5, 6, -8, 3, -1, 0, 4, -7];

// !Answer:
const positiveNumbers = [];
const negativeNumbers = [];




function splitNumbers(num) {
  for (let i = 0; i < num.length; i++) {
    const numb = num[i];
    if (numb > 0) {
      positiveNumbers.push(numb);
    } else if( numb < 0) {
      negativeNumbers.push(numb);
    }
  }
}
splitNumbers(numbers);
console.log(positiveNumbers);
console.log(negativeNumbers);
