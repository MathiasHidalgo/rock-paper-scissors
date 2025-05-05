let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const hChoice = prompt('0 : rock, 1 : paper, 2 : scissors')
    return hChoice < 1 ? 'rock' : hChoice < 2 ? 'paper' : 'scissors';
}

function getComputerChoice() {
    const cChoice = Math.floor(Math.random()* 3);
    return cChoice < 1 ? 'rock' : cChoice < 2 ? 'paper' : 'scissors';
}


function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        return console.log('draw!, try again refreshing')
    }
    if(humanChoice > computerChoice &&  humanChoice == 'scissors') {
        return console.log(`You lost! ${computerChoice} beats ${humanChoice}`) 
    }
    if(computerChoice > humanChoice && computerChoice == 'scissors' ) {
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`) 
    }
    if(humanChoice < computerChoice && humanChoice == 'rock') {
        return console.log(`You lost! ${computerChoice} beats ${humanChoice}`) 
    }
    if(computerChoice < humanChoice && computerChoice == 'rock' ) {
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
}

}
const humanElection = getHumanChoice();
const computerElection = getComputerChoice();

playRound(humanElection, computerElection);