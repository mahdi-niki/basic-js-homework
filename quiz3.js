//?Q-1:Write a code, give a number from 0 to 6, and show the day of the week (solve it with switch case).
// Please use variables given to you and Do Not change the name of them!!
/*
 0=>monday
1=>tuesday
...
*/

let number = Math.floor(Math.random() * 7 );
let result;

switch (number) {
  case 0:
    result=("Monday");
    break;
  case 1:
    result=("Tuesday");
    break;
  case 2:
    result=("Wednesday");
    break;
  case 3:
    result=("Thursday");
    break;
  case 4:
    result=("Friday");
    break;
  case 5:
    result=("Saturday");
    break;
  case 6:
    result=("Sunday");
    break;
}
console.log(result)