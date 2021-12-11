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
        if (computerSelection === "scissors")
            return win;
        
        else {
            return lose;
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return win;

        else {
            return lose;
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "paper")
            return win;

        else {
            return lose;
        }
    }
}

console.log(playRound());