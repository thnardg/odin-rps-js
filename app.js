const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const restart = document.getElementById("restart-btn");

const displayUser = document.getElementById("user-display");
const displayPc = document.getElementById("pc-display");

const userScore = document.getElementById("user-score");
const pcScore = document.getElementById("pc-score");

window.onload = newGameSetup();

restart.addEventListener("click", () => {
  newGameSetup();
});

/* SETUP NEW GAME - Clean scores and display */
function newGameSetup() {
  let playerScore = parseInt(0);
  let computerScore = parseInt(0);
  let round = parseInt(0);
  console.log("\x1b[36m%s\x1b[0m", "A new game has started!");
  //TODO change display class to hide image inside
}

function countRounds() {
  round += 1;
}
