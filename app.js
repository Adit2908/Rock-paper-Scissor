let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    // Math.random()
    //rock,paper,scissors
}

const drawGame =() =>{
    // console.log("game was draw.");
    msg.innerText="Game was draw.Play again!";
    msg.style.backgroundColor="#081b31";
}


const showWinner = (userWin,userChoice,comChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose")
        msg.innerText=`You lost. ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate Computer choice-> modular
    const comChoice=genCompChoice();
    console.log("comp choice =",comChoice);


    if(userChoice===comChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            //scissors,paper
            userWin=comChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=comChoice==="scissors" ? false : true;
        }else{
            //rock,papaer
            userWin=comChoice==="rock" ? false : true;
            }
        showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);

    })
})
