// Using the .map() method, create a new array with numbers multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const solutionOne = numbers.map(function(num){
    return num * 100
  }) // write code here
  const solutionTwo = numbers.map(num=>{
     return num *1000/10
     
  }) // write code here
  const solutionThree =numbers.map(num=> num *500)// write code here
  
  
  console.log(solutionOne)
  console.log(solutionTwo)
  console.log(solutionThree)


