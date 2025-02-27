

function getComputerChoice(){
    let number = Math.random();
    
    if(number <= 0.33){
        return "rock";
    }
    else if(number <= 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Please enter one of the following - rock, paper or scissors");
    return choice;
}





function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        console.log("Human choice: " + humanChoice + "\n" + "Computer choice: " + computerChoice);
    
        if (humanChoice === "rock"){
            switch (computerChoice){
                case "rock":
                    console.log("Draw! Rock doesn't beat rock.");
                    break;
                case "scissors":
                    console.log("You win! Rock beats scissors.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.");
                    computerScore++;
                    break;
            }
        }
    
        if (humanChoice === "paper"){
            switch (computerChoice){
                case "paper":
                    console.log("Draw! Paper doesn't beat paper.");
                    break;
                case "rock":
                    console.log("You win! Paper beats rock.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper.");
                    computerScore++;
                    break;
            }
        }
    
        if (humanChoice === "scissors"){
            switch (computerChoice){
                case "scissors":
                    console.log("Draw! Scissors doesn't beat scissors.");
                    break;
                case "paper":
                    console.log("You win! Scissors beats paper.");
                    humanScore++;
                    break;
                case "rock":
                    console.log("You lose! Rock beats scissors.");
                    computerScore++;
                    break;
            }
        }
    
        // console.log("HS: " + humanScore, "CS: " + computerScore);
    
    
    }

    for(let i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("HS: " + humanScore, "CS: " + computerScore);
    if (humanScore > computerScore){
        console.log("Human wins!");
    }
    if(humanScore === computerScore) console.log("Draw! None wins.")
    else console.log("Computer wins!");
        

}

// console.log("Computer choice:" + getComputerChoice());
// console.log("Human choice: " + getHumanChoice() + "\n" + "Computer choice: " + getComputerChoice());

playGame();
//it's done
