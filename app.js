/* 
computer choice
init choices
randomize choices 
select random choice 
return choice

*/

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];

  
}

/*
PlayRound
init player choice
init cpu choice

compare choices 
set winner 
return winner 
*/

const playRound = (playerSelection, cpuSelection) => {
    
   

    if(playerSelection === "rock" && cpuSelection === "paper") {
        return "You lose! paper beats rock";
    } else if (playerSelection === "rock" && cpuSelection === "scissors"){
        return "You win! rock beats scissors";
    } else if (playerSelection === "rock" && cpuSelection === "rock") {
        return "You both chose rock, It's a tie";
    } else if (playerSelection === "paper" && cpuSelection === "scissors") {
        return "You lose! sissors beats paper";
    } else if (playerSelection === "paper" && cpuSelection === "rock"){
        return "You win! paper beats rock";
    } else if(playerSelection === "paper" && cpuSelection === "paper") {
        return "You both chose paper, its a tie";
    } else if (playerSelection === "scissors" && cpuSelection === "rock"){
        return "You lose! rock beats scissors"
    } else if (playerSelection === "scissors" && cpuSelection === "paper"){
        return "You win! scissors beats paper"
    } else if (playerSelection === "scissors" && cpuSelection === "scissors") {
        return "You both chose scissors, it's a tie";
    }
}

/*
playGame()

*/

const playGame = () => {
    let cpuSelection = getComputerChoice();
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors");
        console.log(playRound(playerSelection, cpuSelection))
        
    }
}

playGame();

//     let playerSelection = "rock";
//     let cpuSelection = getComputerChoice();

// console.log(playRound(playerSelection, cpuSelection));



