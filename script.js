console.log("What's popping world!");

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const input = prompt("Type rock, paper, or scissors.");
  const normalized = input.toLowerCase();
  return normalized;
}

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice === getComputerChoice) {
    return "Tie!";
  } else if (
    (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
    (getHumanChoice === "paper" && getComputerChoice === "rock") ||
    (getHumanChoice === "scissors" && getComputerChoice === "paper")
  ) {
    humanScore++;
    return console.log("Good Job! You Win!!!");
  } else {
    computerScore++;
    return console.log("Sorry! Computer Wins");
  }
}

for (let i = 0; i < 5; i++) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

if (humanScore > computerScore) {
  console.log("You Win!!!");
} else if (computerScore > humanScore) {
  console.log("Sorry! You Lose.");
} else {
  console.log("It's a tie!!!");
}
