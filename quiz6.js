/**
 *
 *
 *
 *
 *
 *   You have to predict the output of this program WITHOUT EXECUTING IT.
 *
 *   In order to do this, try writing down the value that all variables take
 *   during each step of the program execution.
 *
 *   Answer the following questions:
 *
 *   1. This program throws an error. Why? (If you can't find it, try executing it). because we don't have any b valeu
 *   2. Remove the line that throws the error.
 *   3. What is printed to the console?            2 6 4 9 6 13 8 47
 *   4. How many times is "f1" called? 2 time i = 1 and i = 3
 *   5. How many times is "f2" called? 3 time  i = 0  i = 2   i = 4
 *   6. What value does the "a" parameter take in the first "f1" call?  in first time when i = 1 , a = (7 + 1)  so "a" parameter in function = i and i = 1, in the end  f1 =>( 1 , 8 )  
 * 
 *   7. What is the value of the "a" outer variable when "f1" is called for the first time?  in first time a = 7 + 1  so a = 8
 *
 * 
 * 
 * 
 * /////////////////////I did not understand questions 6 and 7 correctly But I answered according to what I understood/////////////////////////
 * @format
 */

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b); remove this line

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
