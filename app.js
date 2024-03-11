const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultContainer = document.querySelector(".results");
const p = document.createElement("p");
const scores = document.querySelector(".score");
const restartBtn = document.querySelector("#restart");
let playerScore = 0;
let cpuScore = 0;
let ties = 0;

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
    restartBtn.disabled = true;
    if(playerSelection === "rock" && cpuSelection === "paper") {
        p.innerText = "You lose! paper beats rock";
        cpuScore++;
    } else if (playerSelection === "rock" && cpuSelection === "scissors"){
        p.innerText = "You win! rock beats scissors";
        playerScore++;
    } else if (playerSelection === "rock" && cpuSelection === "rock") {
        const p = document.createElement("p");
        p.innerText = "You both chose rock, It's a tie";
        ties++;
    } else if (playerSelection === "paper" && cpuSelection === "scissors") {
        p.innerText = "You lose! sissors beats paper";
        cpuScore++;
    } else if (playerSelection === "paper" && cpuSelection === "rock"){
        p.innerText = "You win! paper beats rock";
        playerScore++;
    } else if(playerSelection === "paper" && cpuSelection === "paper") {
        p.innerText = "You both chose paper, its a tie";
        ties++;
    } else if (playerSelection === "scissors" && cpuSelection === "rock"){
        p.innerText = "You lose! rock beats scissors"
        cpuScore++;
    } else if (playerSelection === "scissors" && cpuSelection === "paper"){
        p.innerText = "You win! scissors beats paper";
        playerScore++;
    } else if (playerSelection === "scissors" && cpuSelection === "scissors") {
        p.innerText = "You both chose scissors, it's a tie";
        ties++;
    }
    updateScore();
    resultContainer.appendChild(p);
}

const updateScore = () => {
    scores.innerText = "Player Score: " + playerScore + " CPU Score: " + cpuScore;

    if(playerScore === 5 && cpuScore < 5) {
        scores.innerText = "Player is the winner";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = "true";
        restartBtn.disabled = false;
    } else if(cpuScore === 5 && playerScore < 5) {
        scores.innerText = "Cpu is the winner";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.disabled = false;
    }
}

const restartGame = () => {
    playerScore = 0;
    cpuScore = 0;
    p.innerText = '';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    
    updateScore();
}

/*
playGame()

*/

const playGame = () => {
    let cpuSelection = getComputerChoice();
    // for(let i = 0; i < 5; i++){
    //     let playerSelection = prompt("Choose rock, paper, or scissors");
    //     console.log(playRound(playerSelection, cpuSelection))
        
    // }
}



rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    
   
    
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

restartBtn.addEventListener("click", () => {
    restartGame();
})



playGame();





