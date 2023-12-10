let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score")

const  genComChoice =()=>{
    const options =["rock","paper","scissors"];
    //rock, paper scissors  random generate 
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame =()=>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw! play again";
    msg.style.backgroundColor = "rgb(255, 115, 0)";
};

const showWinner =(userWin,userChoice,comChoice)=>{
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats Computer's ${comChoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        compScore++;
        comScorePara.innerText=compScore;
        msg.innerText = `You Lose. Computer's ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice =", userChoice);
    /*Generate computer choice ---> modular programming means 
    perform each task using seperate function*/
    const comChoice = genComChoice();
    console.log("Comp choice =", comChoice);


    if(userChoice===comChoice){
        //Draw Game
        drawgame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            //scissors ,paper
            userWin=comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin=comChoice === "scisors" ? false : true;
        }
        else {
            //rock,paper
            userWin=comChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});