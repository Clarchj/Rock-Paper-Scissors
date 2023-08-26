//this function will generate random R/P/S for the computer:

const playerText = document.querySelector('.player-score');
const computerText =document.querySelector('.computer-score');
const resultText=document.querySelector('#result')
let playerChoice;
let computerChoice;
let playerScore;
let computerScore;
let result;

const getComputerChoice = function(){
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].toString();   
}
function checkWinner(cc, pc) {
    cc = cc.toLowerCase();
    pc = pc.toLowerCase();

    if (pc === cc) {
        result = `It's a tie! You both chose ${pc}.`;
    } else if (
        (pc === "rock" && cc === "scissors") ||
        (pc === "scissors" && cc === "paper") ||
        (pc === "paper" && cc === "rock")
    ) {
        result = `You win! ${pc} beats ${cc}.`;
    } else {
        result = `You lose! ${cc} beats ${pc}.`;
    }
}

document.querySelectorAll('.box').forEach( choice =>{
    choice.addEventListener('click', () => {
        playerChoice = choice.getAttribute('data-choice');
        // const result = playRound(getComputerChoice(), playerChoice);
        // displayResult(result);
        console.log(playerChoice);
    });

} )



