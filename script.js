function getComputerChoice(){
    var rps;
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1:
            rps = "Rock";
            break;
        case 2:
            rps = "Paper";
            break;
        case 3:
            rps = "Scissors";
            break;
    }
    return rps;

}

const computerSelection = getComputerChoice();
console.log(computerSelection);

function playerSelection(choice){

}