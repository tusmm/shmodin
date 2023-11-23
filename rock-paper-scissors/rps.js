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

// return  0 for draw, 1 on player win, 2 on computer win
function playRound(playerSelection, computerSelection) {
    let playersChoice = playerSelection.toLowerCase()
    if (playersChoice == "rock") {
        if (computerSelection == "rock") {
            console.log("Draw!")
            return 0
        } else if (computerSelection == "scissors") {
            console.log("You win!")
            return 1
        } else {
            console.log("Computer wins!")
            return 2
        }
    } else if (playersChoice == "paper") {
        if (computerSelection == "paper") {
            console.log("Draw!")
            return 0
        } else if (computerSelection == "rock") {
            console.log("You win!")
            return 1
        } else {
            console.log("Computer wins!")
            return 2
        }
    } else if (playersChoice == "scissors") {
        if (computerSelection == "scissors") {
            console.log("Draw!")
            return 0
        } else if (computerSelection == "paper") {
            console.log("You win!")
            return 1
        } else {
            console.log("Computer wins!")
            return 2
        }
    }
    console.log("invalid input")

}

function game() {
    let playerScore = 0
    let cpuScore = 0

    let rounds = 5
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Please enter rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        let point = playRound(playerSelection, computerSelection)
        if (point == 0) {
            console.log("No points")
        } else if (point == 1) {
            playerScore += 1
        } else if (point == 2) {
            cpuScore += 1
        }
    }
    console.log("Player score: " + playerScore)
    console.log("Computer score: " + cpuScore)
}

game()