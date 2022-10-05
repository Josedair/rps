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

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = "roCk";

function playRound(computer, player){
    var outcome;
    player.toString();
    var playerToLowercase = player.toLowerCase();
    
    if(computer == playerToLowercase){
        outcome = "It's a tie!!"
    }
    else if(computer == "rock"){
        if(playerToLowercase == "paper")
        {
            outcome = "You win! paper beats rock!"
        }

        else if(playerToLowercase == "scissors")
        {
            outcome = "You loose! rock beats scissors! :/"
        }
    }

    else if(computer == "paper"){
        if(playerToLowercase == "scissors")
        {
            outcome = "You win!! Scissors beats paper!"
        }

        else if(playerToLowercase == "rock")
        {
            outcome = "You loose :/ paper beats rock!"
        }

       
    }
    else if(computer == "scissors"){
            if(playerToLowercase == "rock")
            {
                outcome = "You Win!! :) rock beats scissors!"
            }

            if(playerToLowercase == "paper")
            {
                outcome = "You loose! :/ scissors beats paper"
            }
    }

    else 
        outcome = "something went wrong :/"

   
    
    console.log(playerToLowercase)
    
    return(outcome);
}
console.log(playRound(computerSelection,playerSelection));