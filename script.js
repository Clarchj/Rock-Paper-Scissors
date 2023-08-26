//Player will choose between by click between icons
//Create a function that will get the choice's atribute 
//and then turn in to a string eith of R/P/S

//add event listener to a group of nodes: 3 player's choices div
document.querySelectorAll('.box').forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('data-choice');
        const result = playRound(getComputerChoice, playerChoice);
        displayResult(result);
    });
});

// Generating computer's random choice between Tock/Paper/Scissors
const options = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].toString();
}
// the function will return a string 

// const playerChoice = getPlayerChoice();
// const computerChoice = getComputerChoice();
// function to play 1 round of RPS
function playRound(cc, pc) {
    cc = cc.toLowerCase();
    pc = pc.toLowerCase();

    if (pc === cc) {
        return `It's a tie! You both chose ${pc}.`;
    } else if (
        (pc === "rock" && cc === "scissors") ||
        (pc === "scissors" && cc === "paper") ||
        (pc === "paper" && cc === "rock")
    ) {
        return `You win! ${pc} beats ${cc}.`;
    } else {
        return `You lose! ${cc} beats ${pc}.`;
    }
}

//combine 3 function: getComputerChoice,getPlayerChoice and PlayRound
//so that every time player click, the point of the round will add up
// console.log("Computer's choice:", computerChoice);
// console.log("Your choice:", playerChoice);
function displayResult(result) {
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;
}