console.log("What's popping world!");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});
paperBtn.addEventListener("click", () => {
  playRound("paper");
});
scissorBtn.addEventListener("click", () => {
  playRound("scissors");
});

let humanScore = 0;
let computerScore = 0;
humanChoice = humanValue();
computerChoice = computerValue();

function humanValue() {
  const input = prompt("Type rock, paper, or scissors.");
  const normalized = input.toLowerCase();
  return normalized;
}

function computerValue() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanValue, computerValue) {
  console.log("You choose:" + humanValue);
  console.log("Computer choose:" + computerValue);
  if (humanValue === computerValue) {
    console.log("Tie!");
  } else if (
    (humanValue === "rock" && computerValue === "scissors") ||
    (humanValue === "paper" && computerValue === "rock") ||
    (humanValue === "scissors" && computerValue === "paper")
  ) {
    humanScore++;
    console.log("Good Job! You Win!!!");
  } else {
    computerScore++;
    console.log("Sorry! Computer Wins");
  }
}

for (let i = 0; i < 5; i++) {
  const humanChoice = humanValue();
  const computerChoice = computerValue();
  playRound(humanChoice, computerChoice);

  console.log(
    "Human score:" + humanScore + " | Computer Score:" + computerScore,
  );
}

if (humanScore > computerScore) {
  console.log("You Win!!!");
} else if (computerScore > humanScore) {
  console.log("Sorry! You Lose.");
} else {
  console.log("It's a tie!!!");
}
