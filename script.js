let userScore = 0;
let compScore  = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");


//9
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

//3 
let genCompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
//8
const showWinner = (userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++; //9
        userScorePara.innerText = userScore;
       // console.log("you have Won the GAME");
        msg.innerText = `You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
       // console.log("you have lost the GAME")
        msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}


//6 
let drawGame = ()=>{
    console.log("Game is Draw")
    msg.innerText = "Game is Draw, Play Again";
    msg.style.backgroundColor = "black"

}



//2
let playGame = (userChoice)=>{
    console.log(`userChoice is  - ${userChoice}`)
    const compChoice = genCompChoice(); //4
   console.log(`computer is  - ${compChoice}`)
    //7
    if(userChoice===compChoice){
        //draw
       drawGame();
    }else{
    let userWin = true;
    if(userChoice==="rock"){
        //paper,scissors
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice==="paper")
        // scissors, rock
        userWin = compChoice === "scissors"? false : true;
        else {
            // paper, rock
            userWin = compChoice ==="rock"? false : true;
            
        }
        showWinner(userWin,userChoice,compChoice);

    }

}

//1
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id");
       // console.log("choice is clicked" /*, userChoice*/)
        playGame(userChoice);
    })

});


