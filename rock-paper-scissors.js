// randomly returns either 'rock', 'paper' or 'scissors'
// this function will be used in the game to make the computers play
function getComputerChoice() {
    let optionalChoices = ['rock', 'paper', 'scissors'];
    let randomNumber = getRandomInt(3);
    
    return optionalChoices[randomNumber];   
}

// function that returns a random integer between zero and max - 1.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// funciton that plays a single round of Rock Paper Scissors
// function takes two parameters playerSelection and computerSelection
// and then returns a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    if (playerSelectionLower == computerSelectionLower) {
        return "Tie game"
    } else if (playerSelectionLower == 'rock' && computerSelectionLower == 'scissors') {
        playerScore += 1;
        return "You Win! Rock beats Scissors!"
    } else if (playerSelectionLower == 'rock' && computerSelectionLower == 'paper') {
        computerScore += 1;
        return "You Lose! Paper beats Rock!"
    } else if (playerSelectionLower == 'paper' && computerSelectionLower == 'rock') {
        playerScore += 1;
        return "You Win! Paper beats Rock!"
    } else if (playerSelectionLower == 'paper' && computerSelectionLower == 'scissors') {
        computerScore += 1;
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelectionLower == 'scissors' && computerSelectionLower == 'paper') {
        playerScore += 1;
        return "You Win! Scissors beats Paper!"
    } else if (playerSelectionLower == 'scissors' && computerSelectionLower == 'rock') {
        computerScore += 1;
        return "You Lose! Rock beats Scissors!"
    }
}

let playerSelection = prompt("Choose: Rock, Paper, or Scissors");

console.log(playerSelection.toLowerCase());

keepGoing = true;

while (keepGoing) {
    if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'paper' ||
        playerSelection.toLowerCase() == 'scissors') {
            keepGoing = false;
        } else {
            playerSelection = prompt("Must choose either 'rock', 'paper' or 'scissors'");
        }
   
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));