//?Q-3:Consider this array; if it contains the word "javascript", print it to the console."The array contains javascript".
// otherwise print "The array does not contain javascript.
// Please use variables given to you and Do Not change the name of them!!
let programs = ['java', 'kotlin', 'javascript', 'python', 'typeScript'];






// let javascriptContain= programs.indexOf("javascript");
// if (javascriptContain !== -1){
//     console.log("The array contains javascript");

// } else {console.log("The array does not contain javascript.")}


///////////////////////////or/////////////////////////////////



let javascriptContain = programs.includes("javascript")
if (javascriptContain === true){
    console.log("The array contains javascript")
    
}else{
    console.log("The array does not contain javascript.")
}

