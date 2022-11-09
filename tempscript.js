
    
    
    
    
    
    function openPopUp(){
        instructions.style.display = "flex";
    }



    
    function gameCounter(count){
        var counter = count;
        counter += 1;
        console.log(counter);
        return counter
    }
    
    
    function clickListener(){
        
       if(gameCount != 5){
            resetImages();
            const playerChoice = event.target.id;
            showImage(playerChoice);
            console.log(playerChoice);
            console.log(typeof(playerChoice))
            const cpuChoice = getComputerChoice();
            playRound(cpuChoice,playerChoice);
            gameCount +=1;
            const displayPlayerPoints = document.querySelector('#playerPoints');
            const displayCpuPoints =document.querySelector('#cpuPoints');
            displayPlayerPoints.textContent = "Player Points: " + playerPoints;
            displayCpuPoints.textContent = "CPU Points: " + cpuPoints;
            const roundNumber = document.querySelector('#roundNumber');
            roundNumber.textContent = gameCount;
            
       }
          if(gameCount == 5){
            endGame();
            gameCount = 0;
            const gameResult = document.querySelector('#finalResult');
            
            console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
             
            if(playerPoints == cpuPoints){
                console.log("It's a tie!")
                
                gameResult.textContent = "It's a tie!"
                
            }
            else if(playerPoints > cpuPoints){
                console.log("You WIn!!")
                gameResult.style.display = "block";
                gameResult.textContent = "You WIn!!"
                
            }
            else{
                console.log("You loose :/")
                gameResult.style.display = "block";
                gameResult.textContent = "You loose :/"
                
            }
            playerPoints = 0;
            cpuPoints = 0; 
            
             
          }
         
    }

    
    
    
    
    
    
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
    
    
    

    const gameBoard = document.querySelector('#gameBoard');
    
    
    