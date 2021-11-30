function computerPlay() {

    let randomNumber = Math.random() * 100;
    let computerHand;

    if (randomNumber <= 33) {
        computerHand = 'rock';
    } else if (randomNumber <= 66) {
        computerHand = 'paper';
    } else {
        computerHand = 'scissors';
    }

    return computerHand;
}

console.log(computerPlay);

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
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {

        return 'win'

    } else if (playerSelection === computerSelection) {

        return 'tie';

    } else {

        return 'lose';
        
    }
}

function game() {

    let gameCounter = 0;
    let winCounter = 0;
    let loseCounter = 0;
    let tieCounter = 0;

    while (gameCounter < 5) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        gameCounter += 1;

        if (result === 'win') {

            console.log('You play: ' + playerSelection + '\n Computer plays: ' + computerSelection + '. \n You win!');
            winCounter += 1;

        } else if (result === 'lose') {

            console.log('You play: ' + playerSelection + '\n Computer plays: ' + computerSelection + '. \n You lose!');
            loseCounter += 1;

        } else {
            console.log('You play: ' + playerSelection + '\n Computer plays: ' + computerSelection + '. \n Try again!');
            tieCounter += 1;
        }

    }

    console.log('Wins: ' + winCounter);
    console.log('Losses: ' + loseCounter);
    console.log('Ties: ' + tieCounter)

    if (winCounter > loseCounter) {
        console.log('You win!')
    } else if (winCounter < loseCounter) {
        console.log('You Lose!')
    } else {
        console.log('It\'s a tie!')
    }

}

game();