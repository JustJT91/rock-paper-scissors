(humanChoice === "rock" && computerChoice === "rock") ||
  (humanChoice === "paper" && computerChoice === "paper") ||
  (humanChoice === "scissors") & (computerChoice === "scissors");

const result = document.querySelector("#result");

const computerChoice = document.createElement("div.computerChoice");
div.computerChoice.textContent = "The Computer chose:";
result.appendChild(div.computerChoice);

const score = document.createElement("div.score");
div.score.textContent = "Current Score:";
result.appendChild(div.score);

const finalMessage = document.createElement("div.finalMessage");
div.finalMessage.textContent = "And the winner is...";
result.appendChild(div.finalMessage);

function humanValue() {
  const input = prompt("Type rock, paper, or scissors.");
  const normalized = input.toLowerCase();
  return normalized;
}
for (let i = 0; i < 5; i++)
  const humanChoice = humanValue();
  const computerChoice = computerValue();
  playRound(humanChoice, computerChoice);