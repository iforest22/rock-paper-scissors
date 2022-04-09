

let cpuChoice

function computerPlay() {
    let roll = Math.floor((Math.random()) * 3)
    if (roll === 0) { cpuChoice = 'computer picks rock' }
    if (roll === 1) { cpuChoice = 'computer picks paper' }
    if (roll === 2) { cpuChoice = 'computer picks scissors' }
}

computerPlay()

