let gameCounter = 0;
let winCounter = 0;
let loseCounter = 0;
let tieCounter = 0;


function computerPlay() {

    let randomNumber = Math.random() * 100;
    let computerSelection;

    if (randomNumber <= 33) {
        computerSelection = 'rock';
    } else if (randomNumber <= 66) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }

    return computerSelection;
};



function playerPlay() {

    let playerSelectionCheck = true;
    let playerSelection;

    while (playerSelectionCheck) {

        playerSelection = prompt('Choose Rock, Paper, or Scissors... ')
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            playerSelectionCheck = false;
        } else {
            console.log('Invalid selection.');
        }
    }

    return playerSelection;
};



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        
        gameCounter += 1;
        winCounter += 1;
        return 'win';

    } else if (playerSelection === computerSelection) {

        gameCounter += 1;
        tieCounter += 1;
        return 'tie';

    } else {

        gameCounter += 1;
        loseCounter += 1;
        return 'lose';
        
    };
};

function checkScore() {
    if (gameCounter >= 5) {
        if (winCounter > loseCounter) {
            winnerDiv.innerText = 'You win!';
        } else if (loseCounter > winCounter) {
            winnerDiv.innerText = 'You lose!';
        } else {
            winnerDiv.innerText = 'It\'s a tie!';
        }
    };
}

const winsDiv = document.getElementById('wins');
const lossDiv = document.getElementById('losses');
const tiesDiv = document.getElementById('ties');
const totalDiv = document.getElementById('total');
const winnerDiv = document.getElementById('winner');


const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', e => {
    playRound(e.target.value, computerPlay());
    winsDiv.innerText = `Wins: ${winCounter}`;
    lossDiv.innerText = `Losses: ${loseCounter}`;
    tiesDiv.innerText = `Ties: ${tieCounter}`;
    totalDiv.innerText = `Round: ${gameCounter}`;
    checkScore();
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', e => {
    playRound(e.target.value, computerPlay());
    winsDiv.innerText = `Wins: ${winCounter}`;
    lossDiv.innerText = `Losses: ${loseCounter}`;
    tiesDiv.innerText = `Ties: ${tieCounter}`;
    totalDiv.innerText = `Round: ${gameCounter}`;
    checkScore();
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', e => {
    playRound(e.target.value, computerPlay());
    winsDiv.innerText = `Wins: ${winCounter}`;
    lossDiv.innerText = `Losses: ${loseCounter}`;
    tiesDiv.innerText = `Ties: ${tieCounter}`;
    totalDiv.innerText = `Round: ${gameCounter}`;
    checkScore();
});
