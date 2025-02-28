// Accessing Dom by Id
/*
let head = document.getElementById("Heading")
console.log(head);
console.log(head.tagName);
console.log(head.textContent);
console.log(head.innerHTML);
console.log(head.innerText);

head.innerText = "Javascript added via Dom"
head.style.color = "red"
head.style.fontSize = "2rem"
*/
// ------------------------------

// Accessing Dom by classname
/*
let headClass = document.getElementsByClassName("headClass");
headClass[2].innerText = "added in class by dom"
headClass[0].style.color = "green"
console.log(headClass[2].innerHTML)
*/
// ----------------

// Accessing Dom by tagname
/*
let byTagName = document.getElementsByTagName("p");
console.log(byTagName[1].innerText)
*/
// ---------------

// accessing Dom by querySelector

// let head = document.querySelector("#Heading");
// console.log(head.innerText);
// head.innerText = "Javascript added via querySelector"
// head.style.color = "red"
// head.style.fontSize = "2rem"
// head.style.fontWeight = "bold"

// accessing Dom by querySelectorAll
// let selectByQueryAll = document.querySelectorAll(".headClass");
// console.log(selectByQueryAll[1].innerText);

// let btn = document.getElementById("btnID");
// btn.setAttribute("class", "green")

// ----------------------- DOM 2

// let list = document.getElementById("list");
// let newElem = document.createElement("li");
// newElem.innerText = "Javascript added via Dom";
// list.appendChild(newElem);

// let aDiv = document.getElementById("div1");
// let newElem2 = document.createElement("h1");
// newElem2.innerText = "Javascript added via Dom";
// newElem2.style.color = "green"
// aDiv.appendChild(newElem2);







let list = document.getElementById("list");
let item = document.getElementById("item");
let removeBtn = document.getElementById("removeBtn");
let replaceBtn = document.getElementById("replaceBtn");

removeBtn.addEventListener("click", () => {
    // list.removeChild(item)
    if (item) {
        list.removeChild(item);
    }
})


// removeBtn done
// addeventlistener done
// "click" done
// ()=>{} done
// list.removereChild(list)



replaceBtn.addEventListener("click", () => {
    let newElem = document.createElement("li");
    newElem.innerText = "item replaced";
    list.replaceChild(newElem, item)

})


// replaceBtn done
// addEventListener done
// ()=>{} done
// new elem create
// text content added to new elem
// replace with old