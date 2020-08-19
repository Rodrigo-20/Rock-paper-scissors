let playerSelection;
let playerMarcador=0;
let compMarcador=0;
function computerPlay(){//computer's selection in a randomly fashion
    let options=['Rock','Paper','Scissors'];
    return options[Math.floor(Math.random()*3)];
}
function playerChose(){
    this.classList.add('buttonOver');
}
function removeClass(){
    this.classList.remove('win','lose','buttonOver','tie');
  
}
function win(x){
    x.classList.add('win');
    playerMarcador++;
}
function lose(x){
    x.classList.add('lose');
    compMarcador++;
}
function tie(x){
    x.classList.add('tie');
}
function playRound(){
    playerSelection=this.getAttribute('data-selection');
    const playMarc=document.querySelector(`[data-marcador="player"]`);
    const compMarc=document.querySelector(`[data-marcador="computer"]`);
    this.classList.remove('win','lose','tie','buttonOver'); 
    console.log('just fine');
    computerSelection=computerPlay();
    switch(playerSelection){
        
        case "rock":
        if (computerSelection=="Rock"){tie(this);}
        else if(computerSelection=="Paper"){ lose(this);}
        else{  win(this);}
        break;

        case "scissors":
        if (computerSelection=='Rock'){     lose(this);  }
        else if(computerSelection=="Paper"){    win(this);  }
        else{   tie(this);}
        break;

        case "paper":
        if (computerSelection=="Rock"){ win(this);}
        else if(computerSelection=="Paper"){    tie(this);}
        else{   lose(this);        }
        break;
       
        
}
    playMarc.textContent=playerMarcador;
    compMarc.textContent=compMarcador; 
}


const buttons=document.querySelectorAll('[data-selection]');
buttons.forEach((button)=>{
    button.addEventListener('click',playRound);
    button.addEventListener('mouseover',playerChose);
    button.addEventListener('mouseout',removeClass)})

