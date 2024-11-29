//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ["hello Jo", "fish", "birmingham", "periodic table", "phone"];
//!  Answer:
const moreThan6 = array.filter(str => str.length > 6)  // todo1
console.log(moreThan6)



const lessThan10 = moreThan6.every(str2 => str2.length<10)



console.log(lessThan10)

