//This function picks a random number from 1 - 3 and depending on the outcome
//it returns rock paper or scissors 
function getComputerChoice(){
    var rps;
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1:
            rps = "rock";
            break;
        case 2:
            rps = "paper";
            break;
        case 3:
            rps = "scissors";
            break;
    }
    return rps;

}

// let computerSelection = getComputerChoice();

// let playerSelection = prompt("What's your choice?")

function playRound(computer, player){
    var outcome;
    player.toString();
    var playerToLowercase = player.toLowerCase();

    if(playerToLowercase != "rock" || "paper" || "scissors"){
        outcome ="that's not how you play the game"
    }
    
    if(computer == playerToLowercase){
        outcome = "It's a tie!!"
        console.log("It's a tie!!")
    }
    else if(computer == "rock"){
        if(playerToLowercase == "paper")
        {
            outcome = "You win! paper beats rock!"
            console.log("You win! paper beats rock!")
        }

        else if(playerToLowercase == "scissors")
        {
            outcome = "You loose! rock beats scissors! :/"
            console.log("You loose! rock beats scissors! :/")
        }
    }

    else if(computer == "paper"){
        if(playerToLowercase == "scissors")
        {
            outcome = "You win!! Scissors beats paper!"
            console.log("You win!! Scissors beats paper!")
        }

        else if(playerToLowercase == "rock")
        {
            outcome = "You loose :/ paper beats rock!"
            console.log("You loose :/ paper beats rock!")
        }

       
    }
    else if(computer == "scissors"){
            if(playerToLowercase == "rock")
            {
                outcome = "You Win!! :) rock beats scissors!"
                console.log("You Win!! :) rock beats scissors!")
            }

            if(playerToLowercase == "paper")
            {
                outcome = "You loose! :/ scissors beats paper"
                console.log("You loose! :/ scissors beats paper")
            }
    }

    

   
    
    // console.log(playerToLowercase)
    // console.log(computerSelection)

    // if(outcome.includes("win")){
    //     console.log("it works")
    // }
    // else if(outcome.includes("loose")){
    //     console.log("you lose but it works")
    // }
    
    return(outcome);
}
//  console.log(playRound(computerSelection,playerSelection));

function game() {
    var playerPoints = 0;
    var computerPoints = 0;
      
    
    // if(playerChoice != "rock" || "paper" || "scissors"){
    //     console.log("that's not how you play the game")
        
    // }
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerChoice = prompt("What's your choice?");
        let playerSelection = playerChoice.toLowerCase();
        console.log("CPU: " + computerSelection);
        console.log("You: " + playerSelection)
        playRound(computerSelection,playerSelection)
        
        
        
        if(playRound(computerSelection,playerSelection).includes("win") ){
            playerPoints++;
        }
        else if(playRound(computerSelection,playerSelection).includes("loose")){
            computerPoints++
        }
    }

    console.log("Your Points: " + playerPoints);
    console.log("CPU Points: " + computerPoints);

    if(playerPoints > computerPoints){
        console.log("You win this round! :)")
    }

    else if(playerPoints < computerPoints){
        console.log("You loose this round :/")
    }
    else {
        console.log("It's a tie!")
    }
}

game();