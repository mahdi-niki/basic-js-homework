//?:Write a function called operation that calculate the square, double and cube of a number
// Get a number and operator from the user and calculate the number based on the operator.(^=square, **=double, ***=cube)
//example: operation(3, ‘^’) = 9, 		operation(3, ‘**’) = 6, 	operation(3, ‘***’) = 27

function operation(num) {
  let square = num ** 2;
  let double = num * 2;
  let cube = num ** 3;
  let all =  `  square ${square}
  double ${double} 
  cube ${cube}`
  return all
  
}
console.log(operation(3))