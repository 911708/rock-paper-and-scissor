let userScore =0;
let compScore =0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#computer-score');
const drawgame = () => {
    msg.innerText='game was draw. play again';
    msg.style.backgroundColor='#0a1f38';
};


const showWinner = (userWin,userchoice,compchoice) => {
    console.log(userWin);
    if (userWin){
        userScore++;
        userScorepara.innerText=userScore;

        msg.innerText=`you win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ='green';

    } else {
        compScore++;
        compScorepara.innerText =compScore;

        msg.innerText=`you lose  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const gencompchoice=() => {
    let options =['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
    


};

const playgame =(userchoice) =>{
    console.log("user choice=",userchoice);
    //computer choice
   const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
if(userchoice==compchoice){
    //draw game
    drawgame();
}else{
    let userWin=true;
    if(userchoice==='rock'){
        //scissors , paper
    userWin=compchoice=='paper'?false:true;
    }else if(userchoice==='paper'){
    //rock,scissors
    userWin=compchoice==='scissors'?false:true;
    }else{
        //rock,paper
    userWin=compchoice==='rock'?false:true;
    }
    showWinner(userWin,userchoice,compchoice);

}
   
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{       

    const userchoice=choice.getAttribute('id') ;   

       playgame(userchoice);
    });
});  