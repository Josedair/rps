
    function startGame(){
        resetImages();
        const btnGroup = document.getElementsByClassName('btnGroup');
        for (var i=0;i<btnGroup.length;i+=1){
            btnGroup[i].style.display = 'block';
          }
    
          const start = document.getElementsByClassName('start');
          
          for (var i=0;i<start.length;i+=1){
            start[i].style.display = 'none';
          }  
    }
    start.addEventListener("click", startGame);
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
    function resetImages(){
        const image = document.getElementsByClassName("image")
        for (var i=0;i<image.length;i+=1){
            image[i].style.display = 'none';
          } 
    }
    let gameCount = 0
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
            
       }
          if(gameCount == 5){
            endGame();
            gameCount = 0;
            console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
            if(playerPoints == cpuPoints){
                console.log("It's a tie!")
            }
            else if(playerPoints > cpuPoints){
                console.log("You WIn!!")
            }
            else{console.log("You loose :/")}
            playerPoints = 0;
            cpuPoints = 0; 
            
             
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
                showCpuImage(rps);
                break;
            case 2:
                rps = "paper";
                showCpuImage(rps);
                break;
            case 3:
                rps = "scissors";
                showCpuImage(rps);
                break;
        }
        console.log("CPU:"+rps);
        return rps;
        
    }
    
    let playerPoints = 0;
    let cpuPoints = 0;
    function playRound(computer, player){
        var outcome;
        if(player != "rock" || "paper" || "scissors"){
            outcome ="that's not how you play the game"
        }
        
        if(computer == player){
            outcome = "It's a tie!!"
            console.log("It's a tie!!")
            console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
        }
        else if(computer == "rock"){
            if(player == "paper")
            {
                outcome = "You Win! paper beats rock!"
                console.log("You Win! paper beats rock!")
                ++playerPoints
                console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
            }
    
            else if(player == "scissors")
            {
                outcome = "You lose! rock beats scissors! :/"
                console.log("You lose! rock beats scissors! :/");
                ++cpuPoints;
                console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
            }
        }
    
        else if(computer == "paper"){
            if(player == "scissors")
            {
                outcome = "You Win! Scissors beats paper!"
                console.log("You Win! Scissors beats paper!");
                ++playerPoints
                console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
            }
    
            else if(player == "rock")
            {
                outcome = "You lose :/ paper beats rock!";
                console.log("You lose :/ paper beats rock!");
                ++cpuPoints;
                console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
            }
    
           
        }
        else if(computer == "scissors"){
                if(player == "rock")
                {
                    outcome = "You Win! :) rock beats scissors!"
                    console.log("You Win! :) rock beats scissors!");
                    ++playerPoints
                    console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
                }
    
                if(player == "paper")
                {
                    outcome = "You lose! :/ scissors beats paper"
                    console.log("You lose! :/ scissors beats paper");
                    ++cpuPoints;
                    console.log("your points: " + playerPoints,
             "cpuPoints: " + cpuPoints);
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
    
    function showImage(target){
        const rockImage = document.getElementsByClassName('rockImage');
        const paperImage = document.getElementsByClassName('paperImage');
        const scissorsImage = document.getElementsByClassName('scissorsImage');
    
        if(target == "rock"){
            for (var i=0;i<rockImage.length;i+=1){
                rockImage[i].style.display = 'block';
              }
        }
        else if(target == "paper"){
            for (var i=0;i<paperImage.length;i+=1){
                paperImage[i].style.display = 'block';
              }
        }
        else if(target == "scissors"){
            for (var i=0;i<scissorsImage.length;i+=1){
                scissorsImage[i].style.display = 'block';
              }
        }
    }
    function showCpuImage(target){
        const cpuRockImage = document.getElementsByClassName('cpuRockImage');
        const cpuPaperImage = document.getElementsByClassName('cpuPaperImage');
        const cpuScissorsImage = document.getElementsByClassName("cpuScissorsImage");
    
        if(target == "rock"){
            for (var i=0;i<cpuRockImage.length;i+=1){
                cpuRockImage[i].style.display = 'block';
              }
        }
        else if(target == "paper"){
            for (var i=0;i<cpuPaperImage.length;i+=1){
                cpuPaperImage[i].style.display = 'block';
              }
        }
        else if(target == "scissors"){
            for (var i=0;i<cpuScissorsImage.length;i+=1){
                cpuScissorsImage[i].style.display = 'block';
              }
        }
    }