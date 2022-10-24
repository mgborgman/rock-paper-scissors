let gameInfo = {};

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
function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    if (playerSelectionLower == computerSelectionLower) {
        let roundAnouncement = "Tie Game"
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
    } else if (playerSelectionLower == 'rock' && computerSelectionLower == 'scissors') {
        playerScore += 1;
        let roundAnouncement = "You Win! Rock beats Scissors!";
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
    } else if (playerSelectionLower == 'rock' && computerSelectionLower == 'paper') {
        computerScore += 1;
        let roundAnouncement = "You Lose! Paper beats Rock!"
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
    } else if (playerSelectionLower == 'paper' && computerSelectionLower == 'rock') {
        playerScore += 1;
        let roundAnouncement = "You Win! Paper beats Rock!";
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
    } else if (playerSelectionLower == 'paper' && computerSelectionLower == 'scissors') {
        computerScore += 1;
        let roundAnouncement = "You Lose! Scissors beats Paper!"
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
    } else if (playerSelectionLower == 'scissors' && computerSelectionLower == 'paper') {
        playerScore += 1;
        let roundAnouncement = "You Win! Scissors beats Paper!";
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
    } else if (playerSelectionLower == 'scissors' && computerSelectionLower == 'rock') {
        computerScore += 1;
        let roundAnouncement = "You Lose! Rock beats Scissors!";
        gameInfo = {'playerScore': playerScore, 'computerScore': computerScore, 'roundAnouncement': roundAnouncement};
        
    }
}

function getPlayerChoice() {
    // Prompt user for their choice, must be rock paper or scissors
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors");

    // create a while loop to check that user input is either 'rock', 'paper' or 'scissors'
    // if not ask for input again
    // if input is valid continue on with program
    keepGoing = true;

    while (keepGoing) {
        if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'paper' ||
            playerSelection.toLowerCase() == 'scissors') {
                keepGoing = false;
            } else {
                playerSelection = prompt("Must choose either 'rock', 'paper' or 'scissors'");
            }
    
    }

    return playerSelection;
}

function initiateRound() {
    let playerSelection = this.value;
    let computerSelection = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;
    console.log(`${playerSelection} was clicked`)
    // console.log(typeof(gameInfo));
    // console.log(gameInfo);
    playRound(playerSelection, computerSelection, playerScore, computerScore);
}



// function to run several rounds of Rock Paper Scissors and then declare a winner
function game() {
    console.log('are we getting here');
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let buttons = document.querySelectorAll('.button');
    // console.log(buttons);
    // for(round; round <= 5; round++) {
        // let playerSelection = getPlayerChoice();
        // const computerSelection = getComputerChoice();
        for(const button of buttons) {
            // console.log(button);
            let playerSelection = this.value;
            let computerSelection = getComputerChoice();
            button.addEventListener('click', playRound(playerSelection, computerSelection, playerScore, computerScore));
            // console.log(gameInfo);
        }
        // console.log(gameInfo);
        // let gameInfo = playRound(playerSelection, computerSelection, playerScore, computerScore);
        // playerScore = gameInfo['playerScore'];
        // computerScore = gameInfo['computerScore'];
        let roundAnouncement = gameInfo['roundAnouncement'];
        console.log(roundAnouncement);
        let resultDiv = document.getElementById('results');
        resultDiv.innerHTML = `${roundAnouncement}`;
        // console.log(`Score is you:${playerScore} to computer:${computerScore}`);
    // }
}

game();
// initiateRound();