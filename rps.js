let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");

//Gives the computer choice
function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    return choices[~~(Math.random() * choices.length)];
}

//Disables the buttons. Its used when Someones score is 5 & they win..
function disableButtons(){
    buttons.forEach(element =>{
        element.disabled = true;
    })
}

//the Logic
function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    let result = "";
    let playerChoice = "";
    let computerChoice = "";

    if((playerSelection == "rock" && computerSelection == "scissors") || 
         (playerSelection == "scissors" && computerSelection == "paper") || 
         (playerSelection == "paper" && computerSelection == "rock")){
            playerScore += 1;

            result = ("You Won !!");
            playerChoice = (playerSelection + "<br> Player Score: " + playerScore);
            computerChoice = (computerSelection + "<br> Computer Score: " + computerScore);
                if(playerScore == 5){
                    result += "You Won !!" + "<br>Reload to PLAY AGAIN";
                    disableButtons();
                }
         }
         else if(playerSelection == computerSelection){
            playerScore += 1;
            computerScore += 1;
            result = ("It's a TIE !!");
            playerChoice = (playerSelection + "<br> Player Score: " + playerScore);
            computerChoice = (computerSelection + "<br> Computer Score: " + computerScore);
         }
         else {
            computerScore +=1;
            result = ("You Lose !!");
            playerChoice = (playerSelection + "<br> Player Score: " + playerScore);
            computerChoice = (computerSelection + "<br> Computer Score: " + computerScore);
                if(computerScore == 5){
                    result += "Computer Won !!" + "<br>Reload to PLAY AGAIN";
                    disableButtons();
                }
         }
         document.getElementById("result").innerHTML = result;
         document.getElementById("playerChoice").innerHTML = playerChoice;
         document.getElementById("computerChoice").innerHTML = computerChoice;
         return;
}

//It gives the player selection choice to be used in the logic.
buttons.forEach(button =>{
    button.addEventListener("click", function(){
        playRound(button.value);
    })
})