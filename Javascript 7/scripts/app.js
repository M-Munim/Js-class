// // let btn = document.getElementById('btn');

// // btn.addEventListener("mouseenter", () => {
// //     btn.style.backgroundColor = "red";
// //     alert("Button Clicked!")
// // })

// // ---------------------
// let myName = "Rahul";
// // let myName = "Rahul Kumar"; //redeclare ❌
// myName = "Rahul Kumar";  //reassign
// console.log(myName);


// const myFinalNumbers = 4000;
// // const myFinalNumbers = 3000; //redeclare ❌
// // myFinalNumbers = 3000;  //reassign ❌
// console.log(myFinalNumbers);










// var a = 10;
// var a = 20;  //redeclare
// a = "hello";  // reassign
// var a = 20;  //redeclare
// console.log(a);


















// let stdName = "Muhammad";
// console.log("Hello " + stdName + "! Welcome to JS class 7 ES6");  //traditional using + 
// console.log("Hello ", stdName, "! Welcome to JS class 7 ES6"); //traditional using , 

// console.log(`Hello how are u mr ${stdName} ! Welcome to JS class 7 ES6 ${stdName} `);  // ES6 using backtick ``, (above tab button)

// console.log('Hello how are u mr ali ! Welcome to JS class 7 ES6 ali '); //traditional using '' 
// console.log("Hello how are u mr ali ! Welcome to JS class 7 ES6 ali "); //traditional using ""


// let num1 = 10;
// let num2 = 20;

// console.log(`The sum of num1 and num 2 is ${num1 + num2} `)

// const PIval = 3.14;
// console.log(`the val of PI is ${PIval}`);




// ---------------------

let arr = [100, 200, 300];
let arr2 = [400, 500, 600];

// let newArr = arr.concat(arr2);
// console.log(newArr); // old way

let newArr = [...arr, ...arr2];
console.log(newArr);

function namefun(...name) {
    console.log(name)
}

console.log(namefun("ali", "kamran", "ahmad"))












let aObj = {
    name: "Rahul",
    age: 20,
    email: "HtB4a@example.com"
}

let { name, age, email } = aObj;  // destructuring
console.log(name)
console.log(age)
console.log(email)

console.log(aObj.name)  // dot notation
console.log(aObj["name"])  // bracket notation


let arr3 = ["mango", "apple", "banana"];

let [, two,] = arr3;
// console.log(one)
console.log(two)
// console.log(three)