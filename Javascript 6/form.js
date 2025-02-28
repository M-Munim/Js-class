
let form = document.getElementById("myForm");
let errorMessage = document.getElementById("error-message");

// Adding submit event listener
form.addEventListener("submit", function (event) {

    // getting form values form input elements
    let name = document.getElementById("name").value
    // console.log(name)
    let email = document.getElementById("email").value;

    // ali, ali@gmail.com

    if (name === "" || email === "") {
        errorMessage.innerText = "All fields are required!";
        event.preventDefault(); 		// Prevent form submission 
    } else {
        alert("Form submitted successfully!");
    }
});
