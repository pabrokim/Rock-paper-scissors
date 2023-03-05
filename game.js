
let playerScore = 0;
let computerScore = 0;
let ties = 0;


//generate random numbers

function getComputerChoice() {
    let computerChoice = '';
    let randomNum = Math.floor(Math.random() * 3 ) + 1;      
    if(randomNum === 1){
        computerChoice = 'rock';
    }else if(randomNum === 2){
        computerChoice = 'scissors';
    }else if(randomNum === 3){       
        computerChoice = 'paper';
    } 
    return computerChoice;
}

//single round of play

function playRound(playerSelection, computerSelection){   
    let play ='';

    if(playerSelection === computerSelection ){       
        play = 'Tie';
        ties++;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){       
        play = 'You win!. Rock beats scissors';
        playerScore++;       
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){       
        play = 'You lose!. Paper beats Rock';
        computerScore++;   
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){       
        play = 'You win!. Scissors beat Paper';
        playerScore++;           
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){        
        play = 'You lose!. Rock beats Scissors';
        computerScore++;
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){   
        play = 'You win!. Paper beats Rock';
        playerScore++;       
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        play = 'You lose!. Scissors beat Paper';
        computerScore++;
    }
    return play;
}

//5 times of play and overall winner declaration


function game() {

    for(let i = 0; i < 5; i++){
       
        let playerInput = prompt('Please enter your choice: Rock, Scissors, or Paper');
        let playerSelection = playerInput.toLowerCase();        
        let computerSelection = getComputerChoice();
        let roundWinner = playRound(playerSelection, computerSelection);
    
        console.log(roundWinner);

        if(playerScore > computerScore) {
            console.log('Game over. You win!');
        }else if(playerScore < computerScore) {
            console.log('Game over. You lose!'); 
        }else if(playerScore = computerScore) {
            console.log('Game over. Its a tie!');
        }
   }
}
game();
