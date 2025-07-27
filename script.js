function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock"
    }
    else if (random === 1) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

function getHumanChoice () {
    let choice = prompt("Rock ,Paper or Scissors?")
    return choice
}



function playGame () {

    function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    } 
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! Rock beats Scissor.")
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock.")
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You lose! Scissor beats Paper.")
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissor.")
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats paper.")
        humanScore++;
    }
}
    let round = 0;
    let computerScore = 0;
    let humanScore = 0;


    do  {
        round += 1;
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    } while (round < 5);
    if (computerScore > humanScore) {
        console.log("You Lose the Game!")
    }
    else if (computerScore < humanScore) {
        console.log("You Win the Game!")
    }
    else {
        console.log("Draw!")
    }
}

playGame();