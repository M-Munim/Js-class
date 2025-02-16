// alert("Js connected");

let myAge = 17; // 18  > true 

// if else
// 30 --- > --- 18 // true
// 17 --- > --- 18 // false 
if (myAge > 18) {
    console.log("you can drive");
} else {
    console.log("u cant drive");
}

// write an if else statement to check if a person is eligible to vote or not

// write an if else statement to check if a person can have a CNIC or not 



//-------------------- else if
let obtainedMarks = 10;

if (obtainedMarks >= 80) {
    console.log("A grade");
} else if (obtainedMarks >= 60) {
    console.log("B grade");
} else if (obtainedMarks >= 40) {
    console.log("C grade");
} else {
    console.log("failed");
}

// write a program and hold day name in variable eg(monday, tuesday) and check if it is a weekday or weekend

let dayName = "friday";

if (dayName === "monday") {
    console.log("Today is a weekday");
} else if (dayName === "tuesday") {
    console.log("Today is a weekday");
} else if (dayName === "wednesday") {
    console.log("Today is a weekday");
} else {
    console.log("today is a weekend");
}

// -------------------ternary operator


// if (myAgee > 18) {
//     console.log("you can drive"); // executed if true
// } else {
//     console.log("u cant drive"); // executed if false
// }

// condition ? block of code to be executed if_true : block of code to be executed if_false
let myAgee = 17;
// (myAgee > 18) ? console.log("you can drive") : console.log("u cant drive"); //one liner of if else 

let result = (myAgee > 18) ? "you can drive" : "u cant drive";
console.log(result)