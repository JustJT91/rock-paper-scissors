console.log("What's popping world!");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const scoreDisplay = document.querySelector("#score");
const computerChoiceDisplay = document.querySelector("#computerChoice");
const roundResultDisplay = document.querySelector("#roundResult");
const finalResultDisplay = document.querySelector("#finalWinner");

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
  const humanValue = "rock";
  const computerChoice = computerValue();
  computerChoiceDisplay.textContent = " Computer chose:" + computerChoice;
  const roundResult = playRound(humanValue, computerChoice);
  roundResultDisplay.textContent = roundResult;
  scoreDisplay.textContent =
    "Human score:" + humanScore + " | Computer Score:" + computerScore;
  finalResultDisplay.textContent = finalResult();
});

paperBtn.addEventListener("click", () => {
  const humanValue = "paper";
  const computerChoice = computerValue();
  computerChoiceDisplay.textContent = " Computer chose:" + computerChoice;
  const roundResult = playRound(humanValue, computerChoice);
  roundResultDisplay.textContent = roundResult;
  scoreDisplay.textContent =
    "Human score:" + humanScore + " | Computer Score:" + computerScore;
  finalResultDisplay.textContent = finalResult();
});

scissorBtn.addEventListener("click", () => {
  const humanValue = "scissors";
  const computerChoice = computerValue();
  computerChoiceDisplay.textContent = " Computer chose:" + computerChoice;
  const roundResult = playRound(humanValue, computerChoice);
  roundResultDisplay.textContent = roundResult;
  scoreDisplay.textContent =
    "Human score:" + humanScore + " | Computer Score:" + computerScore;
  finalResultDisplay.textContent = finalResult();
});

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
  if (humanValue === computerValue) {
    return "Tie!";
  } else if (
    (humanValue === "rock" && computerValue === "scissors") ||
    (humanValue === "paper" && computerValue === "rock") ||
    (humanValue === "scissors" && computerValue === "paper")
  ) {
    humanScore++;
    return "Good Job! You Win!!!";
  } else {
    computerScore++;
    return "Sorry! Computer Wins";
  }
}

function finalResult() {
  if (humanScore === 5) {
    return "You Win!!!";
  } else if (computerScore === 5) {
    return "Sorry! You Lose.";
  } else "";
}
