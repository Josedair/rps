function startGame(){
    
    const btnGroup = document.getElementsByClassName('btnGroup');
    for (var i=0;i<btnGroup.length;i+=1){
        btnGroup[i].style.display = 'block';
      }

      const start = document.getElementsByClassName('start');
      
      for (var i=0;i<start.length;i+=1){
        start[i].style.display = 'none';
      }  
}
function endGame(){
    const btnGroup = document.getElementsByClassName('btnGroup');
    for (var i=0;i<btnGroup.length;i+=1){
        btnGroup[i].style.display = 'none';
      }

      const start = document.getElementsByClassName('start');
      
      for (var i=0;i<start.length;i+=1){
        start[i].style.display = 'block';
      }  
}
function gameCounter(count){
    var counter = count;
    counter += 1;
    console.log(counter);
    return counter
}
let gameCount = 0
function clickListener(){
    
   if(gameCount != 5){

        const playerChoice = event.target.id;
        console.log(playerChoice);
        const cpuChoice = getComputerChoice();
        playRound(cpuChoice,playerChoice);
        gameCount +=1;
   }
      if(gameCount == 5){
        endGame();
        gameCount = 0;
      } 

}
rock.addEventListener("click",clickListener);
paper.addEventListener("click",clickListener);
scissors.addEventListener("click",clickListener);

// function playerChoice(){
//     // rock.addEventListener('click', function (e) {
//     //     getComputerChoice();
//     //     console.log("rock");
//     //     return "rock"
//     //   });
    
//     //   paper.addEventListener('click', function (e) {
//     //     getComputerChoice();
//     //     console.log("paper");
        
//     //     return "paper";
//     //   });
//     //   scissors.addEventListener('click', function (e) {
//     //     getComputerChoice();
//     //     console.log("scissors");
        
//     //     return "scissors"
//     //   });
      
// }


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
    console.log("CPU:"+rps);
    return rps;
    
}

function playRound(computer, player){
    var outcome;
    

    if(player != "rock" || "paper" || "scissors"){
        outcome ="that's not how you play the game"
    }
    
    if(computer == player){
        outcome = "It's a tie!!"
        console.log("It's a tie!!")
    }
    else if(computer == "rock"){
        if(player == "paper")
        {
            outcome = "You Win! paper beats rock!"
            console.log("You Win! paper beats rock!")
        }

        else if(player == "scissors")
        {
            outcome = "You lose! rock beats scissors! :/"
            console.log("You lose! rock beats scissors! :/")
        }
    }

    else if(computer == "paper"){
        if(player == "scissors")
        {
            outcome = "You Win! Scissors beats paper!"
            console.log("You Win! Scissors beats paper!")
        }

        else if(player == "rock")
        {
            outcome = "You lose :/ paper beats rock!"
            console.log("You lose :/ paper beats rock!")
        }

       
    }
    else if(computer == "scissors"){
            if(player == "rock")
            {
                outcome = "You Win! :) rock beats scissors!"
                console.log("You Win! :) rock beats scissors!")
            }

            if(player == "paper")
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

function game() {
    var playerPoints = 0;
    var computerPoints = 0;
    var gameCounter = 0;
    
    // if(playerChoice != "rock" || "paper" || "scissors"){
    //     console.log("that's not how you play the game")
        
    // }
    // while(gameCounter >= 5){
    //     let computerSelection = getComputerChoice();
    //     let playerChoice = playerChoice();
    // }

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

