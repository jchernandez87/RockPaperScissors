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
            let humanWin = 'You Win!!';
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = humanWin
            myScore++
    } else if ( playerSelection == 'rock' && computerSelection == 'paper') {
            let iaWin = 'IA Wins!! ';
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = iaWin;
            computerScore++
    } else if ( playerSelection == 'rock' && computerSelection == 'rock') {
            let tieText = "It's a tie"
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = tieText
    } 
    
    //paper options
    
    else if ( playerSelection == 'paper' && computerSelection == 'rock') {
            let humanWin = 'You Win!!';
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = humanWin
            myScore++
    } else if ( playerSelection == 'paper' && computerSelection == 'scissors') {
            let iaWin = 'IA Wins!! ';
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = iaWin;
            computerScore++  
    } else if ( playerSelection == 'paper' && computerSelection == 'paper') {
            let tieText = "It's a tie"
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = tieText
    } 
    
    //scissors options

    else if ( playerSelection == 'scissors' && computerSelection == 'paper') {
            let humanWin = 'You Win!!';
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = humanWin
            myScore++
    } else if ( playerSelection == 'scissors' && computerSelection == 'rock') {
            let iaWin = 'IA Wins!! ';
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = iaWin;
            computerScore++  
    } else if ( playerSelection == 'scissors' && computerSelection == 'scissors'){
            let tieText = "It's a tie"
            let scoreText = document.querySelector('[data-score-text]')
            scoreText.textContent = tieText
    }
}

function game() {
    playRound(playerSelection, computerPlay())
    let scoreText = (`HUMAN: ${myScore} - IA: ${computerScore}`)
    let para = document.querySelector('[data-score]')
    para.textContent = scoreText
    if (playerSelection == 0) {
        let scoreText = "MAKE A SELECTION";
        let para = document.querySelector('[data-score]');
        para.textContent = scoreText;
        let empty = '';
        let subText = document.querySelector('[data-score-text]');
        subText.textContent = empty;
    }
    playerSelection = 0;
}

const start = document.querySelector('.play')
start.onclick = () => game()


