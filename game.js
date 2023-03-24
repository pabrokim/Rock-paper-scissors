let playerScore = 0;
let computerScore = 0;
let ties = 0;

const roundResult = document.querySelector('#roundResult');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('.choiceBtn');

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

buttons.forEach((button) => {button.addEventListener('click', () => {
    
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playRound();

    if(playerSelection === computerSelection ){       
        roundResult.textContent = 'You tie!';  
        ties++;   
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){       
        roundResult.textContent = 'You win! Rock beats scissors';
        playerScore++;       
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper'){       
        roundResult.textContent = 'You lose! Paper beats Rock';
        computerScore++;   
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){       
        roundResult.textContent = 'You win! Scissors beat Paper';
        playerScore++;           
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){        
        roundResult.textContent = 'You lose! Rock beats Scissors';
        computerScore++;
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){   
        roundResult.textContent = 'You win! Paper beats Rock';
        playerScore++;       
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        roundResult.textContent = 'You lose! Scissors beat Paper';
        computerScore++;
    }
   
})});

function playRound(){
    
    score.textContent = `Your score = ${playerScore} || Computer score = ${computerScore} || Ties = ${ties}` ;
    
    if(playerScore == 5) {
        winner.textContent = 'Game over. You win!';
        playerScore = 0;
        computerScore = 0;
        
    }
    if(computerScore == 5) {
        winner.textContent = 'Game over. Computer wins!'; 
        playerScore = 0;
        computerScore = 0;
        
    }
}
playRound()

 
