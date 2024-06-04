/* Hahna Seaman, Web Development with JavaScript, JS Challenge 2,  2/1/24 *
Guess the number game objective: ask the player for a number and compare the entered number to the random generated number */

let number = Math.round(Math.random() * 100 + 1); 
/* restricts for whole numbers and no zeros */

let guess = ""; 
/* create a variable to store the user's guess and initial it to an empty string */

while (guess != number) /* while loop with conditional - not equal to */

{
guess = prompt("Guess a number between 1 and 100: ");

/* conditional statements - boolean logic */

if (guess > number)
	alert("Too high.");
else if (guess < number)
	alert("Too low.");
else
	alert("Correct! You win!");
}	

// ask user for their name

let name = prompt("What is your name?");

// log the name to the console and display it on the page

console.log(name);
document.write(name + " wins!");