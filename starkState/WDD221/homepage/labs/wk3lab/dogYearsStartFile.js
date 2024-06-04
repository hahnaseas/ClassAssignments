// Hahna Seaman, Web Development with JavaScript, Lab 3, 2/1/24 

// (1) Store the value of my current age - we can use let and const(constant) to declare variables
const myAge = 22;

// (2) Store the value of 2 
// The value of earlyYears will change - the first two human years of a dog's life count as 10.5 dog years each, then each year following counts as 4 dog years
let earlyYears = 2;
earlyYears *= 10.5;

// (3) Multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears
// Calculate years
earlyYears = earlyYears * 10.5;

// (4) We already took into account the first 2 years, so take the myAge variable and subtract 2 from it
let laterYears = myAge - 2;

// (5) Multiply laterYears by 4 to calculate the number of dog years accounted for by your later years
// Use the multiplication operator to multiply and assign 
let dogYears = laterYears * 4;

// (6) Print to the console values stored in variables
console.log(earlyYears, laterYears, dogYears);

// (7) Add years
let myAgeInDogYears = laterYears + earlyYears;

// (8) Write your name as a string and call its built-in method .toLowerCase()
let myName = "Hahna".toLowerCase();

// (9) Write console.log statement(s) that display your name and age in dog years
// Use string interpolation to display the value in a sentence
console.log(`My name is ${myName}. I'm ${myAge} years old and I am ${myAgeInDogYears} years old in dog years.`);

// (10) Modify the code so that the results display to the page
document.write(`<p>My name is ${myName}. I'm ${myAge} years old and I am ${myAgeInDogYears} years old in dog years.</p>`);