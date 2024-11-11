/**
 * /*
 *   Logical Operators
 *   ---------------------------------
 *   This program calls some functions that are incomplete.
 *   Update the code so that you get the expected result.
 *
 * @format
 */

// the function should return true if num was positive otherwise return false
function isPositive(num) {
  const numb = num < 0;
  return numb;
}

// the function should return true if num was between 5 and 10 otherwise return false
function isBetween5and10(num) {
  if (5 < num && num < 10) {
    return true;
  } else {
    return false;
  }
}

// check the characters if they are less than 10
function isShortName(name) {
  const nam = name.length < 10
  return nam;
}

function startsWithD(name) {
  const sD = name.indexOf("D") === 0
  return sD;
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
===================================================
*/
console.log("Is -10 is a negative number?", isPositive(-10));
console.log("Is 5 a negative number?", isPositive(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'? true
*/
