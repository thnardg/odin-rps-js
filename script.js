function playRound(){
        
    const playerOptions = prompt("Rock, Paper or Scissors?");
    let playerSelection = playerOptions.toLowerCase();
    console.log(playerSelection);

    const computerOptions = ["rock", "paper", "scissors"];
    function computerPlay() {
        return computerOptions[Math.floor(Math.random()*computerOptions.length)];
    }

    let computerSelection = computerPlay();
    console.log(computerSelection);
    
    let win = "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
    let lose = "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();

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