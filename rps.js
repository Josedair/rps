// function that initiates a game. shows player choices and displays points
function startGame(){
    // resetImages();
    const displayPlayerPoints = document.querySelector('#playerPoints');
    const displayCpuPoints =document.querySelector('#cpuPoints');
    const gameResult = document.querySelector('#finalResult');
    const matchResult = document.querySelector('#result');
    displayPlayerPoints.style.display = "block";
    displayCpuPoints.style.display = "block";
    matchResult.textContent = "";
    gameResult.textContent = "";
    displayPlayerPoints.textContent = "Player Points: 0";
    displayCpuPoints.textContent = "CPU Points: 0";
    const btnGroup = document.getElementsByClassName('btnGroup');
    for (var i=0;i<btnGroup.length;i+=1){
        btnGroup[i].style.display = 'block';
      }

      const start = document.getElementsByClassName('start');
      
      for (var i=0;i<start.length;i+=1){
        start[i].style.display = 'none';
      } 
    

}

// a refrence to the "play again?" button that calls the page refrsh function when pressed
const playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click",pageRefresh);

// refreshes the page so game can be played again
function pageRefresh(){
    window.location.reload(true);
}

// a refrence to the "clear pop up burron" (ok button)
// calls the close pop up funcrion when clicked
const clearPopUp = document.getElementById("clearPopUp");
clearPopUp.addEventListener("click",closePopUp);


// function to close the instruction pop up
function closePopUp(){
    const instructions = document.getElementById("instructions");
    const gameStatus = document.getElementById("gameStatus");
    // const start = document.querySelector('start');
    instructions.style.display = "none";
    gameStatus.style.visibility = "visible";
    const start = document.getElementsByClassName('start');
      
      for (var i=0;i<start.length;i+=1){
        start[i].style.visibility = 'visible';
      } 
}

// function that stops the user from playing the game so that results ccan be displayed
function endGame(){
    const btnGroup = document.getElementsByClassName('btnGroup');
    for (var i=0;i<btnGroup.length;i+=1){
        btnGroup[i].style.display = 'none';
      }

      playAgain.style.display = 'block';
}

// changes images with image tag display to 'none' so they are not vissible on screen
function resetImages(){
    const image = document.getElementsByClassName("image")
    for (var i=0;i<image.length;i+=1){
        image[i].style.display = 'none';
      } 
}

// displays image depending on RPS choice by player
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

// displayes the image corresponding to the cpu RPS choice
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

//  function for cpu choice in game of RPS generates random # from 1-3 and returns rock, paper, or scissors depending on that random number generated
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
// global variables for player points
let playerPoints = 0;
let cpuPoints = 0;
// takes to inputs and calculates the winner of a RPS round
function playRound(computer, player){
   
    const matchResult = document.querySelector('#result');
    var outcome;
    if(player != "rock" || "paper" || "scissors"){
        outcome ="that's not how you play the game"
    }
    
    if(computer == player){
        outcome = "It's a tie!!"
        console.log("It's a tie!!")
        matchResult.textContent = "tie!"
        console.log("your points: " + playerPoints,
         "cpuPoints: " + cpuPoints);
    }
    else if(computer == "rock"){
        if(player == "paper")
        {
            outcome = "You Win! paper beats rock!"
            matchResult.textContent = "You Win! paper beats rock!"
            console.log("You Win! paper beats rock!")
            ++playerPoints
            console.log("your points: " + playerPoints,
         "cpuPoints: " + cpuPoints);
        }

        else if(player == "scissors")
        {
            outcome = "You lose! rock beats scissors! :/"
            matchResult.textContent = "You lose! rock beats scissors! :/"
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
            matchResult.textContent = "You Win! Scissors beats paper!"
            console.log("You Win! Scissors beats paper!");
            ++playerPoints
            console.log("your points: " + playerPoints,
         "cpuPoints: " + cpuPoints);
        }

        else if(player == "rock")
        {
            outcome = "You lose :/ paper beats rock!";
            matchResult.textContent = "You lose :/ paper beats rock!";
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
                matchResult.textContent = outcome = "You Win! :) rock beats scissors!";
                console.log("You Win! :) rock beats scissors!");
                ++playerPoints
                console.log("your points: " + playerPoints,
         "cpuPoints: " + cpuPoints);
            }

            if(player == "paper")
            {
                outcome = "You lose! :/ scissors beats paper"
                matchResult.textContent = "You lose! :/ scissors beats paper";
                console.log("You lose! :/ scissors beats paper");
                ++cpuPoints;
                console.log("your points: " + playerPoints,
         "cpuPoints: " + cpuPoints);
            }
    }

    

   
    
    
    
    return(outcome);

}

rock.addEventListener("click",firstToFive);
paper.addEventListener("click",firstToFive);
scissors.addEventListener("click",firstToFive);

// a function that uses a click listener to play a game of RSP. function calls the playRound function using inputs from the clicklisteners. 
function firstToFive(){
    
    let gameCount = 0
    if(playerPoints != 5 && cpuPoints != 5){
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
        const result = document.querySelector('#result');
        const currentRound = document.querySelector('#currentRound');
        roundNumber.textContent = gameCount;
        if(playerPoints == 5 || cpuPoints == 5){
            endGame();
            const gameResult = document.querySelector('#finalResult');
            gameResult.style.display = "block";
        console.log("your points: " + playerPoints,
         "cpuPoints: " + cpuPoints);
         currentRound.style.display = "none";
         result.style.display = "none";
        if(playerPoints == 5){
            console.log("You WIn!!")
            gameResult.textContent = "You Win!!"
        }
        else if(cpuPoints == 5){
            console.log("You loose :/")
            gameResult.textContent = "You loose :/"
            
        }
       
        playerPoints = 0;
        cpuPoints = 0; 
        }
    }

    else {
        endGame();
        gameCount = 0;
        
        
         
      }
    }