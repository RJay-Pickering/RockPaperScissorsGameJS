const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScoreElement = document.getElementById("score_a");
const computerScoreElement = document.getElementById("score_b");

const mappedOptions = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

let playerScore = 0;
let computerScore = 0;
let hasAlreadyPlayed = false;
let playerChoice;
let computerChoice;

window.onload = newGame();

function randomChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  for (let option in mappedOptions) {
    if (mappedOptions[option] === randomChoice) {
      computerChoice = option;
    }
  }
}

function pickOption(selectedOption) {
  if (playerChoice === undefined) {
    playerChoice = selectedOption;

    if (selectedOption === "rock") {
      rock.classList = "player";
    } else if (selectedOption === "paper") {
      paper.classList = "player";
    } else {
      scissors.classList = "player";
    }

    if (computerChoice === undefined) {
      randomChoice();
      while (computerChoice === playerChoice) {
        randomChoice();
      }

      if (computerChoice === "rock") {
        rock.classList = "computer";
      } else if (computerChoice === "paper") {
        paper.classList = "computer";
      } else {
        scissors.classList = "computer";
      }
    }

    getWin(playerChoice, computerChoice);
  } else {
    alert("You already played!");
  }
  hasAlreadyPlayed = false;
}

function getWin(player, computer) {
  if (hasAlreadyPlayed === true) {
    if (player === "rock" && computer === "paper") {
      computerScore++;
    } else if (player === "rock" && computer === "scissors") {
      playerScore++;
    } else if (player === "paper" && computer === "scissors") {
      computerScore++;
    } else if (player === "paper" && computer === "rock") {
      playerScore++;
    } else if (player === "scissors" && computer === "rock") {
      computerScore++;
    } else if (player === "scissors" && computer === "paper") {
      playerScore++;
    }

    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
  }
}

function newGame() {
  if (hasAlreadyPlayed === false) {
    hasAlreadyPlayed = true;
    playerChoice = undefined;
    computerChoice = undefined;

    rock.classList = "";
    paper.classList = "";
    scissors.classList = "";

    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
  }
}
