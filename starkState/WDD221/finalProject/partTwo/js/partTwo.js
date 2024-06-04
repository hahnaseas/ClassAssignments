//Hahna Seaman, Final P2, 5/3/24

let score = 0; 

function playGame() 
{
  //variables 
  let playerName = "";
  let number = Math.round(Math.random() * 100 + 1);
  let guess = "";
  let attempts = 0;
  
  //incrementScore and decrementScore variables
  let incrementScore = 0;
  let decrementScore = 0;

  while (guess != number) 
  {
    guess = prompt("Guess a number between 1 and 100: ");

    if (guess > number)
      alert("Too high! ");
    else if (guess < number)
      alert("Too low! ");
    else {
      alert("Correct! You win!");
      document.body.style.backgroundColor = "#004D00";
    }
	
	  attempts++; //increment attempts

  }

  //ask for players name
  let name = prompt("What is your name?");
  console.log('Number of attempts: ', attempts);
  document.write(name + " wins in " + attempts + " attempts. Congratulations!");

  return attempts;
}

//incrementScore
document.getElementById("incrementScore").addEventListener("click", function() 
{
  score++; //increase score by 1 when player wins
  document.getElementById("scoreDisplay").textContent = "Score: " + score; 
});

//decrementScore
document.getElementById("decrementScore").addEventListener("click", function()
 {
  score--; // Decrease score by 1 when player loses
  document.getElementById("scoreDisplay").textContent = "Score: " + score; 
});

//resetScore
document.getElementById("resetScore").addEventListener("click", function() 
{
  score = 0; //reset score to 0
  document.getElementById("scoreDisplay").textContent = "Score: " + score;
});

//function that tracks games played
function updateGameScore()
 {
  let gamesPlayed = 0;

  return function()
  {
    gamesPlayed++;
    return gamesPlayed;
  };
}

//reset score function
function resetScore() 
{
  score = 0;
  document.getElementById("scoreDisplay").textContent = "Score : " + score;
}

playGame();

let games = gameScore();
console.log("Number of games: ", games);
