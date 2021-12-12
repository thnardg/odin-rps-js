// Function for Each Round:
function playRound(){
    
    // Get player option, make it lowercase, and store it in a variable:
    const playerOptions = prompt("Rock, Paper or Scissors?");
    let playerSelection = playerOptions.toLowerCase();
    console.log(playerSelection);

    // Get computer option by selection a random value from an array:
    const computerOptions = ["rock", "paper", "scissors"];
    function computerPlay() {
        return computerOptions[Math.floor(Math.random()*computerOptions.length)];
    }
    // Make a variable for the computer option:
    let computerSelection = computerPlay();
    console.log(computerSelection);
    
    // Win or Lose messages.
    let win = "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
    let lose = "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();

    // Every possible scenario for the player vs computer, and a score system:
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return win;
        }

        else {
            computerScore++;
            return lose;
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return win;
        }

        else {
            computerScore++;
            return lose;
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            return win;
        }

        else {
            computerScore++;
            return lose;
        }
    }

}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

// LOOP for a game of 5 rounds:
function game() {
    for(i=0; i<5; i++) {
    console.log(playRound());
    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    }

    if(playerScore === computerScore) {
        return "It's a tie!" + playerScore + " vs " + computerScore;
    }

    else if (playerScore > computerScore) {
        return "Player Wins! Your Score: " + playerScore;
    }

    else {
        return "Computer Wins! Your Score: " + playerScore;
    }
}

alert(game());