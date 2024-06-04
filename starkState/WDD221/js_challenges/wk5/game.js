// Hahna Seaman, JavaScript Challenge 3, 2/14/24 

// math.floor rounds to the lower value while math.round rounds to either lower or higher depending on the number
let number = Math.floor(Math.random() * 100 + 1);

// initialize attempts variable
let attempts = 0;

function newGame() {
    number = Math.floor(Math.random() * 100 + 1);
    document.getElementById("guess").focus();
    document.getElementById("guess").select();
    attempts = 0;
}

function checkGuess() {
    let guess = document.getElementById("guess").value;
    let msg = "";
    attempts++;
    if (guess > number)
        msg = guess + " was too high. Try again.";
    else if (guess < number)
        msg = guess + " was too low. Try again.";
    else {
        msg = guess + " was the number! You win!";
        msg = msg + " Try a new game :). ";
        msg = msg + "You won in " + attempts + " tries.";

        let scoreboard = document.getElementById("scoreboard");
        scoreboard.innerHTML =
            "You guessed " + guess + " in " + attempts + " attempts! <br>" +
            scoreboard.innerHTML;

        newGame();
    }

    let output = document.getElementById("output");
    output.innerHTML = msg;
    document.getElementById("guess").focus();
    document.getElementById("guess").select();
}
