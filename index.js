const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let computerscore = 0 ;
let playerscore = 0 ;

function playGame(playerchoice){

    const computerchoice =choices [Math.floor(Math.random() * 3)];
    let result ="";

    if (playerchoice === computerchoice)
    {
        result="IT'S A TIE!";
    }
    else{
            switch(playerchoice)
            {
                case "rock":
                    result=(computerchoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                    break;
                case"paper":
                    result=(computerchoice === "rock") ? "YOU WIN" : "YOU LOSE";
                    break;
                case"scissors":
                    result=(computerchoice === "paper") ? "YOU WIN" : "YOU LOSE";
                    break;
            }
    }
    playerDisplay.textContent =`PLAYER : ${playerchoice}`;
    computerDisplay.textContent=`computer: ${computerchoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerscore++;
            playerScoreDisplay.textContent=playerscore;

            break;
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerscore++;
            computerScoreDisplay.textContent=computerscore;
            break;
    }
}
module.exports =playGame;