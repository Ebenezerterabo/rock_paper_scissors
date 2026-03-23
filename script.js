
// Pseudocode
let humanScore = 0;
let computerScore = 0;

// 1. create a function called getComputerChoice
function getComputerChoice(){
    // 2. return radomly either rock, paper, or scissors
    const resultArray = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * resultArray.length);
    return resultArray[index]
}

//1. create a function called getHumanChoice
function getHumanChoice() {
    const choice = prompt("rock, paper, or scissors?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("tie");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
    } else {
        humanScore++;
    }
}


function playGame() {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
        
        if (humanScore > computerScore) {
            console.log("You win!", humanScore, "to", computerScore);
        } else if (humanScore < computerScore) {
            console.log("You lose!", humanScore, "to", computerScore);
        } else {
            console.log("Tie!", humanScore, "to", computerScore);
        }

}

playGame();
//2.  
// playGround(humanSelection, computerSelection);