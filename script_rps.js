let playerScore = 0
let computerScore = 0
let result = ''

const buttonHolder = document.querySelector('#buttonHolder');

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
buttonHolder.appendChild(rockButton);
rockButton.addEventListener('click', () => playRound("rock"))

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
buttonHolder.appendChild(paperButton);
paperButton.addEventListener('click', () => playRound("paper"))

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
buttonHolder.appendChild(scissorsButton);
scissorsButton.addEventListener('click', () => playRound("scissors"))

const scoreBoard = document.querySelector('#scoreBoard')
//scoreBoard.textContent = "It begins..."
const playerScoreBox = document.querySelector('#playerScoreBox')
const computerScoreBox = document.querySelector('#computerScoreBox')
const span = document.querySelector('#scoreBoard span')


function clickPlay() {
playerScoreBox.textContent = ("Your score is: "+playerScore) ,
computerScoreBox.textContent = ("Their score is: "+computerScore)

if (playerScore>computerScore) {span.textContent = `${result} You're ahead by ${playerScore-computerScore}. `}
else if (playerScore<computerScore) {span.textContent = `${result} You're behind by ${computerScore-playerScore}. `}
else if (playerScore===computerScore) {span.textContent = `${result} You're currently tied. `}

if (playerScore === 5) {span.textContent += `Congratulations, you win by ${playerScore-computerScore}!`, buttonHolder.removeEventListener('click', clickPlay)}
else if (computerScore === 5) {span.textContent += `Sorry, you lose by ${computerScore-playerScore}.`, buttonHolder.removeEventListener('click', clickPlay)}
};

buttonHolder.addEventListener('click', clickPlay)

function playRound(playerChoice) {
    let cpuChoice
    

    function computerPlay() {
        let roll = Math.floor((Math.random()) * 3)
        if (roll === 0) { cpuChoice = 'rock' }
        if (roll === 1) { cpuChoice = 'paper' }
        if (roll === 2) { cpuChoice = 'scissors' }
    }

    computerPlay()


    if (playerChoice === "rock" && cpuChoice === "rock") { result = ("You both chose rock, you tie.") }
    else if (playerChoice === "rock" && cpuChoice === "scissors") { result = ("You chose rock and they chose scissors, you win the round!"), playerScore++ }
    else if (playerChoice === "rock" && cpuChoice === "paper") { result = ("You chose rock and they chose paper, you lose the round!"), computerScore++ }
    else if (playerChoice === "paper" && cpuChoice === "paper") { result = ("You both chose paper, you tie the round.") }
    else if (playerChoice === "paper" && cpuChoice === "rock") { result = ("You chose paper and they chose rock, you win the round!"), playerScore++ }
    else if (playerChoice === "paper" && cpuChoice === "scissors") { result = ("You chose paper and they chose scissors, you lose the round!"), computerScore++ }
    else if (playerChoice === "scissors" && cpuChoice === "scissors") { result = ("You both chose scissors, you tie the round.") }
    else if (playerChoice === "scissors" && cpuChoice === "paper") { result = ("You chose scissors and they chose paper, you win round!"), playerScore++ }
    else if (playerChoice === "scissors" && cpuChoice === "rock") { result = ("You chose scissors and they chose rock, you lose the round!"), computerScore++ }
    else { result = "Something went wrong" }
}






