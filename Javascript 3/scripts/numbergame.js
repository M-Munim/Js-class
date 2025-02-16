let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
    
do {
    // prompt gives us value in string 
    // Number() converts string to number
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess > randomNumber) {
        console.log("Too high! Try again.");
    } else if (guess < randomNumber) {
        console.log("Too low! Try again.");
    }
} while (guess !== randomNumber);

console.log("Congratulations! You guessed the correct number: " + randomNumber);