/*Basic Operators*/
//simple calculation to find out the year of birth

let year = 2019;
let fName = 'Kathy';
let yrKMI = year - 62; //current year minus current age
console.log('WOW ' + fName + ', you were born in the year: ' + yrKMI + '!');

//modify the code to print the message to the webpage

document.write('WOW ' + fName + ', you were born in the year: ' + yrKMI + '!');

// Functions
// The first function is going to calculate age
// Observe the syntax;  Must begin with the keyword function
// followed by a descriptive name, in this example the function is passing an argument, birth year
// the return keyword displays the result of the function
// the function block then is contained within curly braces

function calculateAge(birthYear) 
{
    return 2019 - birthYear; //return the age of a person
}

// call the function
let ageKMI = calculateAge(1957); //birth year.

document.write('<br>Your age is: ' + ageKMI);



// calculate more ages
let ageJMJ = calculateAge(1944);
let ageDMV = calculateAge(1963);
document.write('<br> KMI is: ' +ageKMI + '<br> JMJ is: ' + ageJMJ + '<br> DMV is: ' + ageDMV);


// calculate the number of years until retirement
function yearsUntilRetirement(year, firstName) 
{
    let age = calculateAge(year);
    let retirement = 65 - age;
    
    if (retirement > 0) 
	{
        document.write('<br><br>' +firstName + ' retires in ' + retirement + ' years.<br>');
    } 
		else 
	{
        document.write(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1957, 'Kathy');
yearsUntilRetirement(1944, 'Andy');
yearsUntilRetirement(1963, 'Marie');


// anonymous function
let prodNumbers = function (a, b) 
	{
		return a * b
	};
let answer = prodNumbers(4, 3);
document.write('<br> ' + answer);

// creates a random number and stores it in a variable named randomNumber
// Math.floor and Math.random are built in functions
// The new function so that each time it is called it opens an alert with a new random number
function alertRandom()
{
	let randomNumber = Math.floor( Math.random() * 10 ) + 1; 
	alert(randomNumber); //alert is a built in function
}
alertRandom(); // call the function
alertRandom();
alertRandom();
alertRandom();

// rewrite the code using an anonymous function
let alertRandom = function()
{
	let randomNumber = Math.floor( Math.random() * 10 ) + 1; 
	alert(randomNumber);
};//anonymous functions must end with a semicolon
//call the function in the same fashion as a typical JS function
alertRandom();


// use return instead of alert to display a random numberfunction alertRandom() 

function getRandomNumber() //a more descriptive name for the function
{
  let randomNumber = Math.floor( Math.random() * 10 ) + 1; 
  return randomNumber;
}

alert( getRandomNumber() );
console.log( getRandomNumber() );
let newRandomNumber = getRandomNumber();

// incorporate a parameter, which works just like a variable
// the parameter will hold the value that is passed to the function, the upper limit of our random number

function getRandomNumber( upper ) 
{
  let randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}

console.log( getRandomNumber(20) );
document.write( getRandomNumber(50) );













