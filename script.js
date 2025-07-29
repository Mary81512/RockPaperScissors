let round = 0;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } 
}

function handleClick(playerSelection) {
  if (round >=5) {
    round = 0;
    playerScore = 0;
    computerScore = 0;
  };

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  const displayResult = document.createElement("p");
  displayResult.textContent = `Round ${round + 1}:${result}`;
  container.appendChild(displayResult);

    if (result.startsWith("You win")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }

  round++;

  if (round === 5) {
    const final = document.createElement("h3");
    if (playerScore > computerScore) {
      final.textContent = `🏆 You won the game! ${playerScore}:${computerScore}`;
    } else if (computerScore > playerScore) {
      final.textContent = `💀 You lost the game. ${playerScore}:${computerScore}`;
    } else {
      final.textContent = `🤝 It's a tie! ${playerScore}:${computerScore}`;
    }
    container.appendChild(final);
  }
};

const container = document.createElement("div");
document.body.appendChild(container);

// Rock
const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
buttonRock.addEventListener("click", () => handleClick("rock"));
container.appendChild(buttonRock);

// Paper
const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener("click", () => handleClick("paper"));
container.appendChild(buttonPaper);

// Scissors
const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
buttonScissors.addEventListener("click", () => handleClick("scissors"));
container.appendChild(buttonScissors);


