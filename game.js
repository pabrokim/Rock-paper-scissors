//generate random numbers

function getComputerChoice() {
    
    let computerChoice = '';

    let randomNum = Math.floor(Math.random() * 3 ) + 1;
    
    
    if(randomNum === 1){

        computerChoice = 'Rock';
    
    }else if(randomNum === 2){

        computerChoice = 'Scissors';

    }else if(randomNum === 3){
        
        computerChoice = 'Paper';
    }
    
    return computerChoice;
}

//single round play

function playRound(playerSelection, computerSelection){
    

    let play ='';

    if(playerSelection === computerSelection ){
        
        play = 'Tie';
    }
    
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        
        play = 'You win!, Rock beats Scissors.';
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        
        play = 'You lose!, Paper beats Rock.';
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        
        play = 'You win!, Scissors beats Paper.';
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        
        play = 'You lose!, Rock beats Scissors.';
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        
        play = 'You win!, Paper beats Rock.';
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        
        play = 'You lose!, Scissors beats Paper.';
    }

    return play;

}

let playerSelection = prompt('Your selection');
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));