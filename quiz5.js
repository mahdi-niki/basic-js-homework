// ? Question-5:write a function to reverse a string.(hint:first,convert to array,but the answer must to be string)
// ? "google" => "elgoog"
// ! you can search how to reverse string
// search about split(), reverse(), join()

// !Answer:
let score = "please give me $450 ";
function reverseString(stringV) {
  let Sp = stringV.split("");
  Sp.reverse();
  return Sp.join("");
}
let done = reverseString(score);
console.log(done);
