var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice(){
    var choices = ['r', 'p', 's'];
     var randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter ==="p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    var smallUSerWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    var convertToUserChoice= convertToWord(userChoice);
    var convertToWordUserChoice
    result_p.innerText = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`; 
    
    document.getElementById(userChoice).classList.add('green-glow');

}


function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUSerWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerText = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}. You Lost!`; 
    
}

function draw(){
    const smallUSerWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerText = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`; 

}


function game(userChoice){
    const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice){
            case "rs":
            case "pr":
            case "sp":
                
            win(userChoice, computerChoice);

            break;
            case "rp":
            case "ps":
            case "rs":
            
            lose(userChoice, computerChoice);
            break;
            case "rr":
            case "pp":
            case "ss":
            
            draw(userChoice, computerChoice);
            break;
        
        }
}

getComputerChoice();

game("c");

function main (){

rock_div.addEventListener('click', function(){
    game("r")
})
paper_div.addEventListener('click', function(){
    game("p")
})
scissors_div.addEventListener('click', function(){
    game("s")
})

}

main();








