
function playRound() {
    let cpuChoice
    let result

    function computerPlay() {
        let roll = Math.floor((Math.random()) * 3)
        if (roll === 0) { cpuChoice = 'rock' }
        if (roll === 1) { cpuChoice = 'paper' }
        if (roll === 2) { cpuChoice = 'scissors' }
    }

    computerPlay()

    let playerChoice = prompt('Choose rock paper or scissors')
    playerChoice = playerChoice.toLowerCase()

    if (playerChoice === "rock" && cpuChoice === "rock") { result = ("You both chose rock, you tie.") }
    else if (playerChoice === "rock" && cpuChoice === "scissors") { result =("You chose rock and they chose scissors, you win!") }
    else if (playerChoice === "rock" && cpuChoice === "paper") { result =("You chose rock and they chose paper, you lose!") }
    else if (playerChoice === "paper" && cpuChoice === "paper") { result =("You both chose paper, you tie.") }
    else if (playerChoice === "paper" && cpuChoice === "rock") { result =("You chose paper and they chose rock, you win!") }
    else if (playerChoice === "paper" && cpuChoice === "scissors") { result =("You chose paper and they chose scissors, you lose!") }
    else if (playerChoice === "scissors" && cpuChoice === "scissors") { result =("You both chose scissors, you tie.") }
    else if (playerChoice === "scissors" && cpuChoice === "paper") { result =("You chose scissors and they chose paper, you win!") }
    else if (playerChoice === "scissors" && cpuChoice === "rock") { result =("You chose scissors and they chose rock, you lose!") }
    console.log(result)
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

game()






