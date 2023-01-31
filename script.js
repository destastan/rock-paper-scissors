const choices = ["rock","paper","scissors"];
let computerSelection = "none";
let personInput = "none";
let playerSelection = "none";
let roundScore = 0;

function getComputerChoice() {
    computerRandomizer = Math.floor(Math.random()*choices.length);
    return computerSelection = choices[computerRandomizer];
}

function getPlayerChoice() {
    personInput = prompt("Choose rock, paper or scissors");
    return playerSelection = personInput.toLowerCase();
    
}



function playRound() {
    if (computerSelection === playerSelection) {
        console.log("It's a tie!")
    }
    
    else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            console.log('You win! Paper beats rock!');
            roundScore++;
        }
        else {
            console.log("You lose. Rock beats scissors.");
        }
    }
    
    else if (computerSelection === 'paper'){
        if (playerSelection === 'scissors') {
            console.log('You win! Scissors beats paper!');
            roundScore++;
        }
        else {
            console.log("You lose. Paper beats rock.");
        }

    }

    else if (computerSelection === 'scissors') {
        if (playerSelection === 'paper') {
            console.log('You lose. Scissors beats paper!');
        }
        else {
            console.log("You win! Rock beats scissors!");
            roundScore++;
        }
    }

}

function game() {
    for (let i = 0; i < 5; i++) {

        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice();
        
        console.log("Computer choosed: " + computerSelection)
        console.log("You choosed: " + playerSelection)

        playRound();
        console.log("Round is over! Your score is " + roundScore);

    }
}




game()