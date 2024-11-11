/** @format */ // There are errors in this code, can you fix it to pass the tests?

function trimWord(text) {
  let trim = text.trim();
  return trim;
}

function getWordLength(text) {
  lengthWord = text.length;
  return lengthWord;
}

function multiply(a, b, c) {
  let sum = a * b * c;
  return sum;
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

===================================================
*/

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "fixed trimWord function",
  trimWord("  International Mentors & Developers   "),
  "International Mentors & Developers"
);
test(
  "fixed wordLength function",
  getWordLength("A wild sentence appeared!"),
  25
);
test("fixed multiply function", multiply(2, 3, 6), 36);
