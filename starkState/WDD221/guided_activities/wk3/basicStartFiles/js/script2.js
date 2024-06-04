
// creates a random number and stores it in a variable named randomNumber
// Math.floor and Math.random are built in functions
// The new function so that each time it is called it opens an alert with a new random number
function alertRandom()
{
	let randomNumber = Math.floor( Math.random() * 10 ) + 1; 
	alert(randomNumber); //alert is a built in function
}
alertRandom(); // call the function
