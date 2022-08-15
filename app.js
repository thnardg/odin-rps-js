// CONSOLE:
const newGameMsg = "\x1b[35m A new game has started! \x1b[0m";
const winMsg = "\x1b[32m You won this round! \x1b[0m";
const tieMsg = "\x1b[36m It's a tie! \x1b[0m";
const loseMsg = "\x1b[31m Computer won this round! \x1b[0m";

// INTERFACE:
const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const restartGame = document.getElementById("restart-btn");

const displayUser = document.getElementById("user-display");
const displayPc = document.getElementById("pc-display");

const resultMessage = document.getElementById("result-msg");
const points = document.getElementById("points");

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let round = parseInt(0);

window.onload = newGameSetup();

rock.addEventListener("click", () => {
  //Display rock on player side.
  displayUser.style.backgroundImage = "url('assets/r1.png')";
  //Call computer play function.
});

paper.addEventListener("click", () => {
  //Display paper on player side.
  displayUser.style.backgroundImage = "url('assets/p1.png')";
  //Call computer play function.
});

scissors.addEventListener("click", () => {
  //Display scissors on player side.
  displayUser.style.backgroundImage = "url('assets/s1.png')";
  //Call computer play function.
});

restartGame.addEventListener("click", () => {
  newGameSetup();
});

/* SETUP NEW GAME - Clean scores and display */
function newGameSetup() {
  playerScore = parseInt(0);
  computerScore = parseInt(0);
  round = parseInt(0);
  displayUser.style.backgroundImage = "none";
  points.innerHTML = `${playerScore} x ${computerScore}`;
  console.log(newGameMsg);

  //TODO change display class to hide image inside
}

function countRounds() {
  round += 1;
  return round;
}

function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  let pcChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  switch (pcChoice) {
    case computerOptions[0]:
      displayPc.style.backgroundImage = "url('assets/r2.png')";
      break;
    case computerOptions[1]:
      displayPc.style.backgroundImage = "url('assets/p2.png')";
      break;
    case computerOptions[2]:
      displayPc.style.backgroundImage = "url('assets/s2.png')";
      break;
    default:
      displayPc.style.backgroundImage = "none";
  }
  return pcChoice;
}

function playRound() {
  // GET PLAYER CHOICE BY CLICKING BUTTON - STORE IT - DISPLAY IT

  // GET COMPUTER CHOICE BY SELECTING A RANDOM VALUE - STORE IT - DISPLAY IT
  let computerSelection = computerPlay();

  // SCORE POINTS
  if (playerSelection === computerSelection) {
    //DISPLAY TIE
    console.log(tieMsg);
    return;
  } else if (playerSelection === rock) {
    if (computerSelection === computerOptions[2]) {
      playerScore++;
      points.innerHTML = `${playerScore} x ${computerScore}`;
      console.log(winMsg);
      return win;
    } else {
      computerScore++;
      return lose;
    }
  } else if (playerSelection === paper) {
    if (computerSelection === computerOptions[0]) {
      playerScore++;
      points.innerHTML = `${playerScore} x ${computerScore}`;
      console.log(winMsg);
      return win;
    } else {
      computerScore++;
      return lose;
    }
  } else if (playerSelection === scissors) {
    if (computerSelection === computerOptions[1]) {
      playerScore++;
      points.innerHTML = `${playerScore} x ${computerScore}`;
      console.log(winMsg);
      return win;
    } else {
      computerScore++;
      console.log(loseMsg);
      points.innerHTML = `${playerScore} x ${computerScore}`;
      return lose;
    }
  }
}
