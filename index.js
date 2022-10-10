const userScore = document.getElementById('user-score')
const computerScore = document.getElementById('computer-score');

const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorBtn = document.getElementById('scissor-btn');

const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const result = document.getElementById('result')

let cmpScore = 0;
let usrScore = 0;

const increament = (string)=>{
    if(string == "computer"){
        cmpScore++;
        computerScore.innerHTML = cmpScore
    }
    else if(string == "user"){
        usrScore++;
        userScore.innerHTML = usrScore;

    }

}

const runGame = (name)=>{
 const userInput = name;
 const values = ["rock","paper","scissor"]

 let randomNum = Math.floor(Math.random() * 3)
 const compInput = values[randomNum]

 userChoice.innerHTML = "you pick "+ userInput;
 computerChoice.innerHTML = "computer pick " + compInput;

//  condition rock
if(userInput == "rock"){
    if(compInput == "rock"){
        result.innerHTML = "Draw";
    } 
    else if(compInput == "paper"){
        result.innerHTML = "You Lose"
        increament("computer")
    }
    else {
        result.innerHTML = "You Win";
        increament("user")
    }
}
// paper
if(userInput == "paper"){
    if(compInput == "paper"){
        result.innerHTML = "Draw";
    } 
    else if(compInput == "scissor"){
        result.innerHTML = "You Lose"
        increament("computer")
    }
    else {
        result.innerHTML = "You Win";
        increament("user")
    }
}
// scissor
if(userInput == "scissor"){
    if(compInput == "scissor"){
        result.innerHTML = "Draw";
    } 
    else if(compInput == "rock"){
        result.innerHTML = "You Lose"
        increament("computer")
    }
    else {
        result.innerHTML = "You Win";
        increament("user")
    }
}
}


// Events
rockBtn.addEventListener('click',()=>{
    runGame("rock")
})
paperBtn.addEventListener('click',()=>{
    runGame("paper")
})
scissorBtn.addEventListener('click',()=>{
    runGame("scissor")
})
