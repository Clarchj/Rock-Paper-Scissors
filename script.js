function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
} 

console.log(getComputerChoice())