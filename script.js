const resultsDiv = document.querySelector(".results");
resultsDiv.textContent = "Human score: 0\nComputer score: 0";

let humanScore = 0;
let computerScore = 0;

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





// function playGame(){

    // let humanScore = 0;
    // let computerScore = 0;
    

    // function playRound(humanChoice, computerChoice){
    //     humanChoice = humanChoice.toLowerCase();
    //     computerChoice = computerChoice.toLowerCase();
    
    //     console.log("Human choice: " + humanChoice + "\n" + "Computer choice: " + computerChoice);
    
    //     if (humanChoice === "rock"){
    //         switch (computerChoice){
    //             case "rock":
    //                 console.log("Draw! Rock doesn't beat rock.");
    //                 break;
    //             case "scissors":
    //                 console.log("You win! Rock beats scissors.");
    //                 humanScore++;
    //                 break;
    //             case "paper":
    //                 console.log("You lose! Paper beats rock.");
    //                 computerScore++;
    //                 break;
    //         }
    //     }
    
    //     if (humanChoice === "paper"){
    //         switch (computerChoice){
    //             case "paper":
    //                 console.log("Draw! Paper doesn't beat paper.");
    //                 break;
    //             case "rock":
    //                 console.log("You win! Paper beats rock.");
    //                 humanScore++;
    //                 break;
    //             case "scissors":
    //                 console.log("You lose! Scissors beats paper.");
    //                 computerScore++;
    //                 break;
    //         }
    //     }
    
    //     if (humanChoice === "scissors"){
    //         switch (computerChoice){
    //             case "scissors":
    //                 console.log("Draw! Scissors doesn't beat scissors.");
    //                 break;
    //             case "paper":
    //                 console.log("You win! Scissors beats paper.");
    //                 humanScore++;
    //                 break;
    //             case "rock":
    //                 console.log("You lose! Rock beats scissors.");
    //                 computerScore++;
    //                 break;
    //         }
    //     }

    //     resultsDiv.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore;
    
        // console.log("HS: " + humanScore, "CS: " + computerScore);
    
    
    



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
                    ++humanScore;
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.");
                    ++computerScore;
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
                    ++humanScore;
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper.");
                    ++computerScore;
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
                    ++humanScore;
                    break;
                case "rock":
                    console.log("You lose! Rock beats scissors.");
                    ++computerScore;
                    break;
            }
        }

        resultsDiv.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore;


        if(humanScore === 5 || computerScore === 5){
            resultsDiv.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore;

            // resultsDiv.offsetHeight;
            
            setTimeout(() => { 
                if (humanScore === 5){
                alert("Human wins!");
                }
                
                else alert("Computer wins!");

                humanScore = 0;
                computerScore = 0;

                resultsDiv.textContent = "Human score: " + humanScore + "\nComputer score: " + computerScore;

            }, 0);
        }
    }
    // for(let i = 1; i <= 5; i++){
    //     playRound(getHumanChoice(), getComputerChoice());
    // }

    // console.log("HS: " + humanScore, "CS: " + computerScore);
    // if (humanScore > computerScore){
    //     console.log("Human wins!");
    // }
    // if(humanScore === computerScore) console.log("Draw! None wins.")
    // else console.log("Computer wins!");
        

    const btnRock = document.querySelector("#rock");
    btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    });


    const btnPaper = document.querySelector("#paper");
    btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    });



    const btnScissors = document.querySelector("#scissors");
    btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    });

    






// console.log("Computer choice:" + getComputerChoice());
// console.log("Human choice: " + getHumanChoice() + "\n" + "Computer choice: " + getComputerChoice());











// playGame();
//it's done
