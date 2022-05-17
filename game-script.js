function computerPlay() {
    switch (Math.floor(Math.random()*3) + 1) {
        case 1:
            return "rock";
            break;
    
        case 2:
            return "paper";
            break;
        
        case 3:
            return "scissors";
            break;
    }
}

function roundWin(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    playerWins++;
                    return "You win! Rock beats scissors!";
                    break;

                case "paper":
                    computerWins++;
                    return "You lose! Paper beats rock!";
                    break;
            }
            break;
    
        case "paper":
            switch (computerSelection) {
                case "rock":
                    playerWins++;
                    return "You win! Paper beats rock!";
                    break;
            
                case "scissors":
                    computerWins++;
                    return "You lose! Scissors beats paper!";
                    break;
            }
            break;

        case "scissors":
            switch (computerSelection) {
                case "paper":
                    playerWins++;
                    return "You win! Scissors beats paper!";
                    break;
            
                case "rock":
                    computerWins++;
                    return "You lose! Rock beats scissors!";
                    break;
            }
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Same!";
    } else {
        return roundWin(playerSelection, computerSelection);
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