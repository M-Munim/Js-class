// normal function (old)

// function functionName() {
// code to be executed
// }

// ----------------------------
// function greetPeople() {
//     console.log("Hello Sir");
//     // 100 lines of code
// }

// greetPeople();
// greetPeople();
// greetPeople();

// --------------------------

// es6 function, arrow function

// const functionName = (parameters) => {
//     // Code to execute
// };


// const greetPeople = () => {
//     console.log("Hello Sir");
//     // 100 lines of code
// }

// greetPeople();
// greetPeople();
// greetPeople();

// ----------------------------
// Hoisting




// ---------------------- assigning a default parameter
function greetPeople(customerName = "Guest") {  // parameter
    console.log("Hello", customerName);  //concatenate hello string with customerName variable
    // 100 lines of code
}

greetPeople("Ali");   //argument
greetPeople("Kamran"); //argument
greetPeople("alia "); //argument
greetPeople();









function addNumbers(numOne = 20, numTwo = 20, numThree = 20) {
    return numOne + numTwo + numThree  // returning the sum
}

// NaN = Not a Number
console.log(addNumbers(10, 20, 40))  //70
console.log(addNumbers(30, 40))   //90


// take marks of eng, urdu, maths, science from user , add, avg, percentage => if percentage > 60, print "A", "B"




















const myName = () => {
    console.log("Hello");
}


myName()
















// function sayHI() {

// }

// const sayHI = () => {

// }
















function addddd(a, b) {
    return a + b;
}
console.log(addddd(5, 10));


const add = (a, b) => a + b;
console.log(add(5, 10));


const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); 	