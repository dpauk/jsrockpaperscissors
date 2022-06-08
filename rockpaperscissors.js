let playerScore = 0;
let computerScore = 0;

let options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return `It's a draw. Both players chose ${playerSelection}.`;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose. You chose rock and the computer chose paper. Paper wraps rock."
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win. You chose rock and the computer chose scissors. Rock blunts scissors."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win. You chose paper and the computer chose rock. Paper wraps rock."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose. You chose paper and the computer chose scissors. Scissors cut paper."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose. You chose scissors and the computer chose rock. Rock blunts scissors."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win. You chose scissors and the computer chose paper. Scissors cut paper."
    }
}

function showFinalScores() {
    if (playerScore == computerScore) {
        console.log(`It's a draw. You both scored ${playerScore}.`)
    } else if (playerScore > computerScore) {
        console.log(`You win! You scored ${playerScore} and the computer scored ${computerScore}.`)
    } else {
        console.log(`You lose. You scored ${playerScore} and the computer scored ${computerScore}.`)
    }
}

function game() {
    let playerSelection = "";
    let computerSelection = "";
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What is your guess? ");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    showFinalScores();
}