let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const hChoice = Math.floor(prompt('0 : rock, 1 : paper, 2 : scissors'))
    return hChoice < 1 ? 'rock' : hChoice < 2 ? 'paper' : 'scissors';
}

function getComputerChoice() {
    const cChoice = Math.floor(Math.random()* 3);
    return cChoice < 1 ? 'rock' : cChoice < 2 ? 'paper' : 'scissors';
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if(humanChoice == computerChoice){
        humanScore++;
        computerScore++;
        return console.log('draw!, try again refreshing')
    }
    if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
    }
    if(computerChoice == "scissors" && humanChoice == "rock") {
        humanScore++;
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`) 
    }
    if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`) 
    }
    if(computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        return console.log(`You lost! ${computerChoice} beats ${humanChoice}`) 
    }

    if(computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return console.log(`You lost! ${computerChoice} beats ${humanChoice}`) 
    }
    if(humanChoice == "paper" && computerChoice == "rock" ) {
        humanScore++;
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
}



}

function playgame() {;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`You won ${humanScore} times and lost ${computerScore} times`)
    if(humanScore > computerScore){
        console.log('You are the winner!')
    }
}




playgame();