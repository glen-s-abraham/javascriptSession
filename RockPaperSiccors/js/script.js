let userScore=0;
let computerScore=0;

const symbols=['rock','paper','siccors']
const play=(userSelection)=>{
    const computerSelection=symbols[Math.floor(Math.random()*3)];

    //set user selected symbol
    setImage('player','img/'+userSelection+'.png');

    //set computer selected image
    setImage('computer','img/'+computerSelection+'.png');

     //calculate the scores
     calculateScores(userSelection,computerSelection);
}

const setImage=(elementId,path)=>{
   document.getElementById(elementId).setAttribute('src',path);
}

const calculateScores=(userSelection,computerSelection)=>{
    //user winning logic
    if(
        userSelection=='rock' && computerSelection=='siccors'
        ||userSelection=='siccors' && computerSelection=='paper'
        ||userSelection=='paper' && computerSelection=='rock'
    ){
        userScore=userScore+1;
    }
    
    //computer winning logic
    if(
        computerSelection=='rock' && userSelection=='siccors'
        ||computerSelection=='siccors' && userSelection=='paper'
        ||computerSelection=='paper' && userSelection=='rock'
    ){
        computerScore=computerScore+1;
    }

    //Check if anyone reached 5
    if(userScore==5){
        alert("Player won");
        resetGame();
    }

    if(computerScore==5){
        alert("Computer won");
        resetGame();
    }
        
    setScores();
}

const resetGame=()=>{
    userScore=0;
    computerScore=0;
    setScores();
}

const setScores=()=>{
    document.querySelector("#playerScore").innerHTML=userScore;
    document.querySelector("#computerScore").innerHTML=computerScore;
}

document.querySelector("#rockButton").addEventListener('click',(e)=>{
    play('rock');
});
document.querySelector("#paperButton").addEventListener('click',(e)=>{
    play('paper');
});
document.querySelector("#siccorsButton").addEventListener('click',(e)=>{
    play('siccors');
});
