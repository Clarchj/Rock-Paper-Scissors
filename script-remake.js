//this function will generate random R/P/S for the computer:

const playerScoreText = document.querySelector('.player-score .score');
const computerScoreText = document.querySelector('.computer-score .score');
const resultText = document.querySelector('#result')
let playerChoice;
let computerChoice;
let playerScore;
let computerScore;
let result;
playerScore = 0;
computerScore = 0;

const getComputerChoice = function () {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].toString();
}
computerChoice = getComputerChoice();

function checkWinner(cc, pc) {
    cc = cc.toLowerCase();
    pc = pc.toLowerCase();
    {
        if (pc === cc) {
            result = `It's a tie! You both chose ${pc}.`;
        } else if (
            (pc === "rock" && cc === "scissors") ||
            (pc === "scissors" && cc === "paper") ||
            (pc === "paper" && cc === "rock")
        ) {
            result = `You win! ${pc} beats ${cc}.`;
            playerScore++;
        } else {
            result = `You lose! ${cc} beats ${pc}.`;
            computerScore++;
        }
    }
}

document.querySelectorAll('.box').forEach(choice => {
    choice.addEventListener('click', () => {
        playerChoice = choice.getAttribute('data-choice');
        computerChoice = getComputerChoice();
        // const result = playRound(getComputerChoice(), playerChoice);
        // displayResult(result);
        console.log(playerChoice);
        checkWinner(computerChoice, playerChoice);
        resultText.textContent = result;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        if (playerScore === 5) {
            resultText.textContent = "Player wins! Glory for the king!";
        }
        if (computerScore === 5) {
            resultText.textContent = "Computer wins this battle! You have been defeated";
        }
    });

})





