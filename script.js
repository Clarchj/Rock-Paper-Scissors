function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(computerChoice, playerSelection) {
    const cc = computerChoice.toLowerCase();
    const pc = playerSelection.toLowerCase();

    if (pc === cc) {
        return "It's a tie!";
    } else if (
        (pc === "rock" && cc === "scissors") ||
        (pc === "scissors" && cc === "paper") ||
        (pc === "paper" && cc === "rock")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// let playerSelection = prompt('Choose your option? (Rock/Paper/Scissors)').trim();

// Validate user input
// const validOptions = ["rock", "paper", "scissors"];
// while (!validOptions.includes(playerSelection.toLowerCase())) {
//     playerSelection = prompt('Invalid choice! Please choose between Rock, Paper, or Scissors.').trim();
// }

const playerSelection = document.querySelectorAll('.container.box')
playerSelection.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        console.log(choice);
    });
});

// const computerSelection = getComputerChoice();
// const result = playRound(computerSelection, playerSelection);

// console.log("Computer's choice:", computerSelection);
// console.log("Your choice:", playerSelection);
// alert(result);