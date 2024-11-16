// ? Question-3:write a function to remove all the items which are number from the array and return the array
const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]; // => ['1','100', '-9', '', true, null]

// !Answer:
function removeNumbers(array) {
  const notNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      notNumber.push(array[i]);
    }
  }
  return notNumber;
}
const newNotnumberArray = removeNumbers(notNumberArray);

console.log(newNotnumberArray);
