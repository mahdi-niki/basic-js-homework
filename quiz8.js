//?Q-6:Read these documents and write an example for each method.
// todo-1:https://www.programiz.com/javascript/library/array/includes
//todo-2:https://www.programiz.com/javascript/library/array/indexof
//todo-3:https://www.programiz.com/javascript/library/array/slice
//todo-4:https://www.programiz.com/javascript/library/array/sort

let carsCopmany = [
  "General Motors - GM",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Ford",
  "Tesla",
  "Audi",
  "Porsche",
  "Honda",
  "Nissan",
  "Toyota",
];
/////////////////////////    includes   ////////////////////
 
let Honda = carsCopmany.includes("Honda"); //true

console.log("Honda is cars company?", Honda);
//
//
//
//
////////////////////////    indexOf    ///////////////////
//

let Ford = carsCopmany.indexOf("Ford"); //// 6

let saipa = carsCopmany.indexOf("saipa"); /////// -1  = not exist
//
//
//
//
////////////////////   slice   /////////////////////
let japanCarscompany = carsCopmany.slice(8, 11);

console.log(japanCarscompany); ////////// [ "Honda","Nissan","Toyota"]

//
//
//
//
//
//
///////////////////////   sort  //////////////////////////

let sortByname = carsCopmany.sort(); //// sort by name

let sortBylength = carsCopmany.sort((a, b) => a.length - b.length); ///sort by length


//     if we have Number

let number = [1, 5, 9, 7, 4, 10, 6, 2, 3];

let sortNumber = number.sort((a, b) => a - b);   //sort number ascending

