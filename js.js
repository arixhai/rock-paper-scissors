//

let score = {
        wins : 0, 
        losses : 0,
        tie : 0
    };
    updateScore()


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = ''; 

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Its a Tie.'
        } else if (computerMove === 'paper') {
            result = 'You lose.'
        } else if (computerMove === 'scissors') {
            result = 'You win!'
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!'
        } else if (computerMove === 'paper') {
            result = 'Its a Tie.'
        } else if (computerMove === 'scissors') {
            result = 'You lose.'
        }
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.'
        } else if (computerMove === 'paper') {
            result = 'You win!'
        } else if (computerMove === 'scissors') {
            result = 'Its a Tie.'
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Its a Tie.'){
        score.tie += 1;
    }

    updateScore()

    if (result === 'You win!') {
        document.getElementById('js-result').style.color = "green";
    } else if (result === 'You lose.') {
        document.getElementById('js-result').style.color = "red";
    } else if (result === 'Its a Tie.'){
        document.getElementById('js-result').style.color = "white";
    }

    document.querySelector('.js-moves')
    .innerHTML = `You played ${playerMove}. Computer played ${computerMove}`;
    document.querySelector('.js-result')
    .innerHTML = `${result}`;
    
}

function updateScore() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if ( randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}