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
            return 0
        } else if (computerSelection == "scissors") {
            return 1
        } else {
            return 2
        }
    } else if (playersChoice == "paper") {
        if (computerSelection == "paper") {
            return 0
        } else if (computerSelection == "rock") {
            return 1
        } else {
            return 2
        }
    } else if (playersChoice == "scissors") {
        if (computerSelection == "scissors") {
            return 0
        } else if (computerSelection == "paper") {
            return 1
        } else {
            return 2
        }
    }
    console.log("invalid input")

}

let playerScore = 0
let cpuScore = 0
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function () {
    let point = playRound('rock', getComputerChoice())
    pointCalculation(point)
    scores()
    resetResult()
    checkEnd()
})
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function () {
    let point = playRound('paper', getComputerChoice())
    pointCalculation(point)
    scores()
    resetResult()
    checkEnd()
})
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function () {
    let point = playRound('scissors', getComputerChoice())
    pointCalculation(point)
    scores()
    resetResult()
    checkEnd()
})

function checkEnd() {
    if (playerScore == 5) {
        const draw = document.querySelector("#result")
        draw.textContent = "You win!"
        playerScore = 0
        cpuScore = 0
    } else if (cpuScore == 5) {
        const draw = document.querySelector("#result")
        draw.textContent = "Computer Wins!"
        playerScore = 0
        cpuScore = 0
    }
}

function scores() {
    const updatePlayer = document.querySelector("#player-score")
    updatePlayer.textContent = "Player Score: " + playerScore
    const updateCPU = document.querySelector("#cpu-score")
    updateCPU.textContent = "CPU Score: " + cpuScore
}

function resetResult() {
    const draw = document.querySelector("#result")
    draw.textContent = ""
}

function onDraw() {
    const win = document.querySelector("#status")
    win.textContent = "Draw!"
}

function onPlayerWin() {
    const win = document.querySelector("#status")
    win.textContent = "Player round win!"
}

function onCpuWin() {
    const win = document.querySelector("#status")
    win.textContent = "CPU round win!"
}

function pointCalculation(point) {
    if (point == 0) {
        onDraw()
    } else if (point == 1) {
        onPlayerWin()
        playerScore += 1
    } else if (point == 2) {
        onCpuWin()
        cpuScore += 1
    }
}