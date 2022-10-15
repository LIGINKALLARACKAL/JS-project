function computerPlay(){
    const cOptions = ["rock", "paper", "scissors"];
    return cOptions[Math.floor(Math.random() * 3)];
}
function playRound(pSelection, cSelection) {
    if (pSelection === cSelection) {
       return (`It's a tie! Computer and Player picked ${pSelection}`);
    } else if (pSelection === "rock" && cSelection === "scissors") {
       return ("Player wins! Rock beats Scissors");
    } else if (pSelection === "paper" && cSelection === "rock") {
       return ("Player wins! Paper beats Rock");
    } else if (pSelection === "scissors" && cSelection === "paper") {
        return ("Player wins! Scissors beats Paper");
    } else {
        return (`Computer wins! ${cSelection} beats ${pSelection}`);
    }
}
function game(){
    let compScore=0;
    let playerScore=0;
    for (let i = 0; i < 5; i++) {
        const pSelection = prompt("Please select 'rock, paper, scissors'").toLowerCase();
        const cSelection = computerPlay();
        let Results = playRound(pSelection, cSelection);
        if (Results.startsWith("Player wins")) {
            playerScore++;
        } else if (Results.startsWith("Computer wins")) {
            compScore++;
        }
        else if (Results.startsWith("It's a tie")){
            playerScore++;
            compScore++;
        }
        console.log(Results);
    }
        if (compScore > playerScore){
            console.log(`Computer Wins!! Player ${playerScore} - Computer ${compScore}`);
        }else if (playerScore > compScore){
            console.log(`Player Wins!! Player ${playerScore} - Computer ${compScore}`);
        }else{
           console.log(`It's a Tie!! Player ${playerScore} - Computer ${compScore}`);
    }
}
game();