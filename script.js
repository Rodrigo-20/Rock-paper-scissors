let playerSelection;
let playerScore=0;
let compScore=0;
const Cbuttons=document.querySelectorAll('[data-random]');
const playMarc=document.querySelector(`[data-marcador="player"]`);
const compMarc=document.querySelector(`[data-marcador="computer"]`);

function computerPlay(){//computer's selection in a randomly fashion
    let options=['rock','paper','scissors'];
    return options[Math.floor(Math.random()*3)];
}
function playerChose(){
    this.classList.add('buttonOver');
}
function removeClass(){
    this.classList.remove('win','lose','buttonOver','tie');
    
    Cbuttons.forEach((cbutton)=>cbutton.classList.remove('buttonOver'));
  
}
function gameOver(x,y){
    let res='';
    const result=document.querySelector('p');
             
    result.textContent=res;
     
    
        if(x==5||y==5){
            if(x==5){
                res='You Win !';
            }
            else{ res='You Lose '}
          
            playerScore=0;
            compScore=0;

            
        }
        result.textContent=res;
        
       
    }

function win(x,compButton){
    x.classList.add('win');
    playerScore++;
    compSelectButton=document.querySelector(`[data-random="${compButton}"]`);
    compSelectButton.classList.add('buttonOver');
}
function lose(x,compButton){
    x.classList.add('lose');
    compScore++;
    compSelectButton=document.querySelector(`[data-random="${compButton}"]`);
    compSelectButton.classList.add('buttonOver');
}
function tie(x,compButton){
    x.classList.add('tie');
    compSelectButton=document.querySelector(`[data-random="${compButton}"]`);
    compSelectButton.classList.add('buttonOver');
}
function playRound(){
    playerSelection=this.getAttribute('data-selection');
    Cbuttons.forEach((cbutton)=>cbutton.classList.remove('buttonOver'));
    
    this.classList.remove('win','lose','tie','buttonOver'); 
    console.log('just fine');
    computerSelection=computerPlay();
    switch(playerSelection){
        
        case "rock":
        if (computerSelection=="rock"){tie(this,computerSelection);}
        else if(computerSelection=="paper"){ lose(this,computerSelection);}
        else{  win(this,computerSelection);}
        break;

        case "scissors":
        if (computerSelection=='rock'){     lose(this,computerSelection);  }
        else if(computerSelection=="paper"){    win(this,computerSelection);  }
        else{   tie(this,computerSelection);}
        break;

        case "paper":
        if (computerSelection=="rock"){ win(this,computerSelection);}
        else if(computerSelection=="paper"){    tie(this,computerSelection);}
        else{   lose(this,computerSelection);        }
        break;
        
        
}
    playMarc.textContent=playerScore;
    compMarc.textContent=compScore; 
    gameOver(playerScore,compScore);
}


const buttons=document.querySelectorAll('[data-selection]');
buttons.forEach((button)=>{
    button.addEventListener('click',playRound);
    button.addEventListener('mouseover',playerChose);
    button.addEventListener('mouseout',removeClass)})

