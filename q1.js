/**
 * /*
 *   Array properties
 *   ----------------
 *   Complete the function to test if an array is empty (has no values in it)
 *
 * @format
 */

function isEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  } // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/