// ? Question-2:write a function to find the biggest number in this  array and push it to a new array
const findBigNumber = [5, 2, -10, 50, 35];

const biggestN = [];

// !Answer:
function findBiggestNumber(Array) {
  Array.sort((a, b) => a - b);
  biggestN.push(Array[Array.length -1]);
}

findBiggestNumber(findBigNumber);
console.log(biggestN);
