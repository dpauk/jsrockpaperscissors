let options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a draw. Both players chose ${playerSelection}.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You lose. You chose rock and the computer chose paper. Rock wraps paper."
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win. You chose rock and the computer chose scissors. Rock blunts scissors."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win. You chose paper and the computer chose rock. Rock wraps paper."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You lose. You chose paper and the computer chose scissors. Scissors cut paper."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You lose. You chose scissors and the computer chose rock. Rock blunts scissors."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win. You chose scissors and the computer chose paper. Scissors cut paper."
    }
}