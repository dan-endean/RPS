function computerPlay(){
    let selection = Math.floor(Math.random()*3);
    if(selection == 0){
        return "rock";
    }
    else if(selection == 1){
        return "paper";
    }
    else{
        return "scissors"
    }

}

function play(){
    let cpuSelection = computerPlay();
    let userSelection = prompt("Make a selection");
    userSelection = userSelection.toLowerCase();
    if (userSelection == cpuSelection){
        return "Draw!"
    }
    else if ((userSelection == "rock" && cpuSelection == "paper") || (userSelection == "paper" && "cpuSelection" == "scissors")){
        return "You Lose!"
    }
    else{
        return "You Win!"
    }
}

function game(){
    console.log(play());
}

for(let i = 0; i < 5; i++){
    game();
}


