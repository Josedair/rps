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

//this function takes two inputs cumputer & player and comapres them to determine the winner
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
            outcome = "You Win! paper beats rock!"
            console.log("You Win! paper beats rock!")
        }

        else if(playerToLowercase == "scissors")
        {
            outcome = "You lose! rock beats scissors! :/"
            console.log("You lose! rock beats scissors! :/")
        }
    }

    else if(computer == "paper"){
        if(playerToLowercase == "scissors")
        {
            outcome = "You Win! Scissors beats paper!"
            console.log("You Win! Scissors beats paper!")
        }

        else if(playerToLowercase == "rock")
        {
            outcome = "You lose :/ paper beats rock!"
            console.log("You lose :/ paper beats rock!")
        }

       
    }
    else if(computer == "scissors"){
            if(playerToLowercase == "rock")
            {
                outcome = "You Win! :) rock beats scissors!"
                console.log("You Win! :) rock beats scissors!")
            }

            if(playerToLowercase == "paper")
            {
                outcome = "You lose! :/ scissors beats paper"
                console.log("You lose! :/ scissors beats paper")
                
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

//this function takes the above function and executes it 5 times adding up the points
// to each winner then declares a winner or a tie at the end
function game() {
    var playerPoints = 0;
    var computerPoints = 0;
      
    
    // if(playerChoice != "rock" || "paper" || "scissors"){
    //     console.log("that's not how you play the game")
        
    // }
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        //here we ask the user for input then convert it to lowercase
        // in order for it to be universaly detected by the logic
        let playerChoice = prompt("What's your choice?");
        let playerSelection = playerChoice.toLowerCase();
        console.log("CPU: " + computerSelection);
        console.log("You: " + playerSelection);
        playRound(computerSelection,playerSelection);
        
        
        
        if(playRound(computerSelection,playerSelection).includes("lose") ){
            computerPoints++
        }
        else if(playRound(computerSelection,playerSelection).includes("Win")){
            playerPoints++
        }
    }

    console.log("Your Points: " + playerPoints);
    console.log("CPU Points: " + computerPoints);

    if(playerPoints > computerPoints){
        console.log("You win this round! :)")
        alert("You win this round! :)")
    }

    else if(playerPoints < computerPoints){
        console.log("You loose this round :/")
        alert("You loose this round :/")
    }
    else {
        console.log("It's a tie!")
        alert("It's a tie!")
    }
}

game();