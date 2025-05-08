let humanScore = 0;
let computerScore = 0;
let hChoice = '';




const container = document.querySelector("#container");
const getHumanScore = document.querySelector('#humascore')
const getComputerScore = document.querySelector('#computerscore')
const result = document.querySelector('#result')


const rock = document.querySelector('#rock');
rock.addEventListener ("click", () => {
    hChoice = "rock"
})

const paper = document.querySelector('#paper');
paper.addEventListener ("click", () => {
    hChoice = "paper"
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener ("click", () => {
    hChoice = "scissors"
})



const playRound = document.createElement("button");
playRound.innerHTML = "PlayGame";
playRound.addEventListener("click", () => {
    
    
    
if(humanScore == 5 || computerScore == 5){
    if(humanScore > computerScore) {
        return result.textContent = `You're the winner, you score ${humanScore}`
    } else if (computerScore > humanScore){
        return result.textContent = `You Lost! Computer won! it scored ${computerScore}`
    }else if (computerScore == humanScore){
        return result.textContent = `Draw! both of you score ${humanScore}`
    }
    return;
}
    playGame();
   
})


function getHumanChoice() {
    return hChoice
}

function getComputerChoice() {
    const cChoice = Math.floor(Math.random()* 3);
    const options = ['rock', 'paper', 'scissors'];
    return options[cChoice];
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    
    if(humanChoice == computerChoice){
        humanScore++;
        computerScore++;
        return result.textContent = `Draw!, the score is you : ${humanScore} and the computer : ${computerScore}`
    }
    if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return result.textContent = `You lost!, the score is you : ${humanScore} and the computer : ${computerScore}`
    }
    if(computerChoice == "scissors" && humanChoice == "rock") {
        humanScore++;
        return result.textContent = `You won! , the score is you : ${humanScore} and the computer : ${computerScore}` 
    }
    if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return result.textContent = `You won!, the score is you : ${humanScore} and the computer : ${computerScore}`
    }
    if(computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        return result.textContent = `You lost!, the score is you : ${humanScore} and the computer : ${computerScore}`
    }
    if(computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        return result.textContent = `You lost!, the score is you : ${humanScore} and the computer : ${computerScore}`
    }
    if(humanChoice == "paper" && computerChoice == "rock" ) {
        humanScore++;
        return result.textContent = `You won!, the score is you : ${humanScore} and the computer : ${computerScore}`
    }   



}

container.appendChild(result)
container.appendChild(playRound)
