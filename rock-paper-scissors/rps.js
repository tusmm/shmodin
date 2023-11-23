function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3) // return 0 - 2
    if (roll == 0) {
        return "rock"
    } else if (roll == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let playersChoice = playerSelection.toLowerCase()

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
