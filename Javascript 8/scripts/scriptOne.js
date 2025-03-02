async function sayHello() {
    return "Hello";
}

sayHello().then(console.log);

// pending, fulfilled, rejected
/*
    While a Promise object is "pending" (working), the result is undefined.
    When a Promise object is "fulfilled", the result is a value.
    When a Promise object is "rejected", the result is an error object.
*/

// This runs **only after** the data is fetched


async function fetchData() {
    try {
        // let response = await fetch("https://catfact.ninja/fact");
        let response = await fetch("https://randomuser.me/api/");
        // let response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        let data = await response.json();
        console.log(data);
        console.log(data.results[0].dob.age);
        console.log(data.results[0].email)
        console.log(data.results[0].name.first);
        console.log(data.results[0].cell);
        console.log(data.results[0].login.username);


    } catch (error) {
        console.log("The error of randomuser is", error);
    }
}
fetchData();