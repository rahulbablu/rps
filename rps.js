
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
            playerChoice = (playerSelection);
            computerChoice = (computerSelection);
                if(playerScore == 5){
                    result += "<br><br>Reload to PLAY AGAIN";
                    disableButtons();
                }
         }
         else if(playerSelection == computerSelection){
            result = ("It's a TIE !!");
            playerChoice = (playerSelection);
            computerChoice = (computerSelection);
         }
         else {
            computerScore +=1;
            result = ("You Lose !!");
            playerChoice = (playerSelection);
            computerChoice = (computerSelection);
                if(computerScore == 5){
                    result += "Computer Won !!" + "<br><br>Reload to PLAY AGAIN";
                    disableButtons();
                }
         }
         document.getElementById("result").innerHTML = result;
         document.getElementById("playerChoice").innerHTML = playerChoice;
         document.getElementById("computerChoice").innerHTML = computerChoice;
         document.getElementById("playerScore").innerHTML = playerScore;
         document.getElementById("computerScore").innerHTML = computerScore;
         if(playerChoice == "rock"){
            document.getElementById("playerChoice").innerHTML = '<i class="fa-regular fa-hand-back-fist fa-3x"></i>';
         }else if(playerChoice == "paper"){
            document.getElementById("playerChoice").innerHTML = '<i class="fa-regular fa-hand fa-3x"></i>';
         }else if(playerChoice == "scissors"){
            document.getElementById("playerChoice").innerHTML = '<i class="fa-regular fa-hand-scissors fa-3x"></i>';
         }

         if(computerChoice == "rock"){
            document.getElementById("computerChoice").innerHTML = '<i class="fa-regular fa-hand-back-fist fa-3x"></i>';
         }else if(computerChoice == "paper"){
            document.getElementById("computerChoice").innerHTML = '<i class="fa-regular fa-hand fa-3x"></i>';
         }else if(computerChoice == "scissors"){
            document.getElementById("computerChoice").innerHTML = '<i class="fa-regular fa-hand-scissors fa-3x"></i>';
         }
         return;
}

//It gives the player selection choice to be used in the logic.
buttons.forEach(button =>{
    button.addEventListener("click", function(){
        playRound(button.value);
    })
})

///
function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}