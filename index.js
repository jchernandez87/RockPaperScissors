
const option = window.prompt('')
let playerSelection = option.toLowerCase()

function computerPlay () {
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
            console.log('You win!!, rock beats scissors')
    } else if ( playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++
            console.log('Paper beats rock, you lose!')
    } else if ( playerSelection == 'rock' && computerSelection == 'rock') {
            console.log("It's a tie, play again")

    } //paper options
    
    else if ( playerSelection == 'paper' && computerSelection == 'rock') {
            myScore++
            console.log('You win!!, paper beats rock')
    } else if ( playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++
            console.log("Scissors beats paper, you lose!")
    } else if ( playerSelection == 'paper' && computerSelection == 'paper') {
            console.log("It's a tie, play again");
    } //scissors options

    else if ( playerSelection == 'scissors' && computerSelection == 'paper') {
            myScore++
            console.log('You win!!, scissors beats paper')
    } else if ( playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++
            console.log('Rock beats scissors, you lose!')
    } else if ( playerSelection == 'scissors' && computerSelection == 'scissors'){
            console.log("It's a tie, play again")
    }
}

function game() {
    for(i = 0; i < 5; i++) {
        playRound(playerSelection, computerPlay())
    }
    console.log(`%c  Human: ${myScore} - IA: ${computerScore}`, 'color: blue; font-size: 18px; font-weigth: 600')
    if (myScore > computerScore) {
        console.log('%c Human Wins!! ', 'color: red; font-size: 24px; font-weigth; 800; border: 1px solid red')
    } else if (myScore == computerScore) {
        console.log("%c It's a tie ", 'color: red; font-size: 24px; font-weigth; 800; border: 1px solid red')
    } else {
        console.log('%c IA Wins!! ', 'color: red; font-size: 24px; font-weigth; 800; border: 1px solid red')
    }
}

game()
