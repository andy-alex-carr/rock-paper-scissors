let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    switch (Math.floor(Math.random()*3) + 1) {
        case 1:
            return "rock";
    
        case 2:
            return "paper";
        
        case 3:
            return "scissors";
    }
}

function roundWinner(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    playerWins++;
                    return "You win this round! Rock beats scissors!";

                case "paper":
                    computerWins++;
                    return "You lose this round! Paper beats rock!";
            }
            break;
    
        case "paper":
            switch (computerSelection) {
                case "rock":
                    playerWins++;
                    return "You win this round! Paper beats rock!";
            
                case "scissors":
                    computerWins++;
                    return "You lose this round! Scissors beats paper!";
            }
            break;

        case "scissors":
            switch (computerSelection) {
                case "paper":
                    playerWins++;
                    return "You win this round! Scissors beats paper!";
            
                case "rock":
                    computerWins++;
                    return "You lose this round! Rock beats scissors!";
            }
            break;
    }
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return "Same!";
    } else {
        return roundWinner(playerSelection, computerSelection);
    }
}

function gameWinner() {
    if (playerWins > computerWins) {
        return `${playerWins} - ${computerWins} Game Over! You Win!`;
    } else {
        return `${playerWins} - ${computerWins} Game Over! You Lose!`;
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

rock.addEventListener('click', () => playGame("rock"));
paper.addEventListener('click', () => playGame("paper"));
scissors.addEventListener('click', () => playGame("scissors"));

function playGame(playerSelection) {
    if (playerWins < 5 && computerWins < 5) {
        const round = playRound(playerSelection);
        if (playerWins === 5 || computerWins === 5) {
            result.textContent = gameWinner();
        } else {
            result.textContent = `${playerWins} - ${computerWins} ${round}`;
        }
    }
}

let playerWins;
let computerWins;

function game() {
    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let yourPlay = prompt("Enter your play:").toLowerCase();
        console.log(playRound(yourPlay, computerPlay()));
    }

    if (playerWins == computerWins) {
        console.log("It's a tie! Game Over!");
    } else {
        (playerWins > computerWins) ? console.log("You win! Game Over!") : console.log("You lose! Game Over!");
    }
}