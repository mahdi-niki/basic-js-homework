//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85

function calculateCircleArea(r) {
  let area = r * r * Math.PI;
  return area.toFixed(2);
}

function calculateCircleCircumference(r) {
  let circumference = 2 * r *Math.PI;
  return circumference.toFixed(2);
}
console.log(calculateCircleArea(3))
console.log(calculateCircleCircumference(3))

