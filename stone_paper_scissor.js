const playerChoice = document.getElementById('player_choice')
const computerChoice = document.getElementById('computer_choice')
const psDisplay = document.getElementById('display_player_score')
const csDisplay = document.getElementById('display_computer_score')
const finalResult = document.getElementById('final_result')
const currentStatus = document.getElementById('current_status')
const replay = document.getElementById('restart')
const options = ['Stone','Paper','Scissor']
let player_score = 0
let computer_score = 0
let game_mode = 1

function stonePress(){
    if(game_mode == 1){
        playerChoice.innerHTML = ""
        playerChoice.textContent = "Stone"
        computerDecide(0)
    }
}

function paperPress(){
    if(game_mode == 1){
        playerChoice.innerHTML = ""
        playerChoice.textContent = "Paper"
        computerDecide(1)
    }
}

function scissorPress(){
    if(game_mode == 1){
        playerChoice.innerHTML = ""
        playerChoice.textContent = "Scissor"
        computerDecide(2)
    }
}

function computerDecide(i){
    computerChoice.innerHTML = ""
    let plyr = options[i]
    let x = Math.floor(Math.random()*options.length)
    let comp = options[x]
    computerChoice.textContent = comp

    if(i === x){
        currentStatus.textContent = "Play Again ! Nobody scores"
    }
    if(i==0 && x==1 && player_score!=5 && game_mode==1){
        computer_score += 1
        csDisplay.textContent = computer_score
        currentStatus.textContent = "Oops! computer score"
    }
    if(i==1 && x==0){
        player_score += 1
        psDisplay.textContent = player_score
        currentStatus.textContent = "Great! you score"
    }
    if(i==1 && x==2){
        computer_score += 1
        csDisplay.textContent = computer_score
        currentStatus.textContent = "Oops! computer score"
    }
    if(i==2 && x==1){
        player_score += 1
        psDisplay.textContent = player_score
        currentStatus.textContent = "Great! you score"
    }
    if(i==2 && x==0){
        computer_score += 1
        csDisplay.textContent = computer_score
        currentStatus.textContent = "Oops! computer score"
    }
    if(i==0 && x==2){
        player_score += 1
        psDisplay.textContent = player_score
        currentStatus.textContent = "Great! you score"
    }

    if(player_score == 5 || computer_score == 5){
        game_mode = 0
        if(player_score == 5){
            finalResult.textContent = "Congratulations! you have won the game"
            finalResult.style.color = "green"
        }
        else{
            finalResult.textContent = "Sorry! you lost the game, please try again!"
            finalResult.style.color = "red"
        }
    }
}

function restartGame(){
    finalResult.textContent = ""
    game_mode = 1
    player_score = 0
    computer_score = 0
    playerChoice.innerHTML = ""
    computerChoice.innerHTML = ""
    currentStatus.textContent = ""
    psDisplay.textContent = 0
    csDisplay.textContent = 0
}