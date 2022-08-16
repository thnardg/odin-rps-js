// CONSOLE:
const newGameMsg = "\x1b[35mA new game has started! \x1b[0m";
const winRoundMsg = "\x1b[32mYou won this round! \x1b[0m";
const winMsg = "\x1b[32mYou won! \x1b[0m";
const tieMsg = "\x1b[36mIt's a tie! \x1b[0m";
const loseRoundMsg = "\x1b[31mComputer won this round! \x1b[0m";
const loseMsg = "\x1b[31mComputer won! \x1b[0m";

// INTERFACE:
const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const restartGame = document.getElementById("restart-btn");

const displayUser = document.getElementById("user-display");
const displayPc = document.getElementById("pc-display");

const resultMsg = document.getElementById("result-msg");
const points = document.getElementById("points");

// VARIABLES:
let playerSelection;
let computerSelection;
let playerScore;
let computerScore;
let round;

/* SETUP NEW GAME - Clean scores, rounds and display */
window.onload = newGameSetup();
restartGame.addEventListener("click", () => {
  newGameSetup();
});

function newGameSetup() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  displayUser.style.backgroundImage = "none";
  displayPc.style.backgroundImage = "none";
  rock.style.backgroundColor = "#ffffff4f";
  paper.style.backgroundColor = "#ffffff4f";
  scissors.style.backgroundColor = "#ffffff4f";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  points.innerHTML = `${playerScore} x ${computerScore}`;
  resultMsg.innerHTML = "";
  console.log(newGameMsg);
}

/* SELECT COMPUTER CHOICE - Make computer select a random value */
function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  computerSelection =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  switch (computerSelection) {
    case computerOptions[0]:
      computerSelection = "rock";
      displayPc.style.backgroundImage = "url('assets/r2.png')";
      break;
    case computerOptions[1]:
      computerSelection = "paper";
      displayPc.style.backgroundImage = "url('assets/p2.png')";
      break;
    case computerOptions[2]:
      computerSelection = "scissors";
      displayPc.style.backgroundImage = "url('assets/s2.png')";
      break;
    default:
      displayPc.style.backgroundImage = "none";
  }
  return computerSelection;
}

/* BUTTON EVENT LISTENERS - Start a new game when player selects an option */
rock.addEventListener("click", () => {
  displayUser.style.backgroundImage = "url('assets/r1.png')";
  playerSelection = "rock";
  game();
});

paper.addEventListener("click", () => {
  displayUser.style.backgroundImage = "url('assets/p1.png')";
  playerSelection = "paper";
  game();
});

scissors.addEventListener("click", () => {
  displayUser.style.backgroundImage = "url('assets/s1.png')";
  playerSelection = "scissors";
  game();
});

/* COUNT ROUNDS - And display current round on the console */
function countRounds() {
  round += 1;
  console.log(" ---- Round: " + round);
}

/* PLAY A ROUND - Compare the player selection and the computer selection to determine who won the round and score points. */
function playRound() {
  countRounds();
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    resultMsg.innerHTML = "Tie!";
    console.log(tieMsg);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    points.innerHTML = `${playerScore} x ${computerScore}`;
    resultMsg.innerHTML = "You won this round.";
    console.log(winRoundMsg);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    points.innerHTML = `${playerScore} x ${computerScore}`;
    resultMsg.innerHTML = "You won this round.";
    console.log(winRoundMsg);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    points.innerHTML = `${playerScore} x ${computerScore}`;
    resultMsg.innerHTML = "You won this round.";
    console.log(winRoundMsg);
  } else {
    computerScore++;
    points.innerHTML = `${playerScore} x ${computerScore}`;
    resultMsg.innerHTML = "You lost this round.";
    console.log(loseRoundMsg);
  }
}

/* GAME - Stop game at the 5th round and disable buttons */
function game() {
  if (round < 5) {
    restartGame.style.backgroundColor = "#D2D2D2";
    restartGame.disabled = true;
    playRound();
    console.log("Computer Score: " + computerScore);
    console.log("Your score: " + playerScore);
  } else {
    restartGame.style.backgroundColor = "#15ff0069";
    restartGame.disabled = false;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    rock.style.backgroundColor = "#C2C2C2";
    paper.style.backgroundColor = "#C2C2C2";
    scissors.style.backgroundColor = "#C2C2C2";
    if (playerScore === computerScore) {
      console.log(tieMsg);
      resultMsg.innerHTML = "Game ended. It's a tie!";
    } else if (playerScore > computerScore) {
      console.log(winMsg + playerScore);
      resultMsg.innerHTML = "You won the game!";
    } else {
      console.log(loseMsg + playerScore);
      resultMsg.innerHTML = "Game over. Play again.";
    }
  }
}
