// let student = {
//     name: "Ali",
//     age: 20,
//     isEnrolled: true
// };

// student.name = "rabia"
// student.age = 18
// student.isEnrolled = false
// student.address = "islamabad"
// student.edu = "BS"

// console.log(student)


















// let obj1 = {
//     name: "ali",
//     age: 20
// }

// let obj2 = {
//     edu: "BSCS",
//     gpa: 3.5
// }

// // let obj3 = {
// //     obj1,           //{ {}, {}}
// //     obj2
// // }

// let obj3 = {
//     ...obj1, // spread operator {spread the keys and value of obj1 and obj2}
//     ...obj2
// }
// console.log(obj3)












// // // console.log(student.name);  // using dot notation
// // // console.log(student["name"]);  // using bracket notation
// // // console.log(student["age"]);  // using bracket notation
// // // console.log(student["isEnrolled"]);  // using bracket notation

// // console.log(Object.keys(student));
// // console.log(Object.values(student));





















let student = {
    name: "Ali",
    age: 20,
    marks: [85, 90, 78, 88, 92]
};

function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Average Marks:", calculateAverage(student.marks));