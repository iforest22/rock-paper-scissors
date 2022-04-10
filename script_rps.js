
function playRound() {
    let cpuChoice

    function computerPlay() {
        let roll = Math.floor((Math.random()) * 3)
        if (roll === 0) { cpuChoice = 'rock' }
        if (roll === 1) { cpuChoice = 'paper' }
        if (roll === 2) { cpuChoice = 'scissors' }
    }

    computerPlay()

    let playerChoice = prompt('Choose rock paper or scissors')
    playerChoice = playerChoice.toLowerCase()

    if (playerChoice === "rock" && cpuChoice === "rock") { console.log("You both chose rock, you tie.") }
    else if (playerChoice === "rock" && cpuChoice === "scissors") { console.log("You chose rock and they chose scissors, you win!") }
    else if (playerChoice === "rock" && cpuChoice === "paper") { console.log("You chose rock and they chose paper, you lose!") }
    else if (playerChoice === "paper" && cpuChoice === "paper") { console.log("You both chose paper, you tie.") }
    else if (playerChoice === "paper" && cpuChoice === "rock") { console.log("You chose paper and they chose rock, you win!") }
    else if (playerChoice === "paper" && cpuChoice === "scissors") { console.log("You chose paper and they chose scissors, you lose!") }
    else if (playerChoice === "scissors" && cpuChoice === "scissors") { console.log("You both chose scissors, you tie.") }
    else if (playerChoice === "scissors" && cpuChoice === "paper") { console.log("You chose scissors and they chose paper, you win!") }
    else if (playerChoice === "scissors" && cpuChoice === "rock") { console.log("You chose scissors and they chose rock, you lose!") }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

game()






