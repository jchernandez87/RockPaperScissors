let selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', e => {
             const selectionName = selectionButton.dataset.selection
             makeSelection(selectionName)
        })
})

function makeSelection(selection) {
        playerSelection = selection
}

let playerSelection = '';


function computerPlay() {
        const options = ['paper', 'scissors', 'rock'];
        let selection = options[Math.floor(Math.random() * options.length)];
        return selection;
}

let computerSelection = computerPlay();
let myScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
            
    //rock options
    if ( playerSelection == 'rock' && computerSelection == 'scissors') {
            myScore++
    } else if ( playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++
    } 
    
    //paper options
    
    else if ( playerSelection == 'paper' && computerSelection == 'rock') {
            myScore++
    } else if ( playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++  
    } 

    //scissors options

    else if ( playerSelection == 'scissors' && computerSelection == 'paper') {
            myScore++
    } else if ( playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++  
    } 
}

function game() {
    playRound(playerSelection, computerPlay())
    let scoreText = (`HUMAN: ${myScore} - IA: ${computerScore}`)
    let para = document.querySelector('[data-score]')
    para.textContent = scoreText
    if (myScore == 5) {
        let humanWin = 'You Win!!';
        let scoreText = document.querySelector('[data-score-text]')
        scoreText.textContent = humanWin
    } else if (computerScore == 5) {
        let iaWin = 'IA Wins!! ';
        let scoreText = document.querySelector('[data-score-text]')
        scoreText.textContent = iaWin;
    }
    else if (playerSelection == 0) {
        let scoreText = "MAKE A SELECTION";
        let para = document.querySelector('[data-score]');
        para.textContent = scoreText;
    }
    playerSelection = 0;
}

const start = document.querySelector('.play')
start.onclick = () => game()


