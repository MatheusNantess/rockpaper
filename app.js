const totalScore = {
    wins: 0,
    loses: 0,
    ties: 0

}
const moves = ["Rock","Paper","Scissors"]
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const resetBtn = document.getElementById('reset')
const spanWins = document.getElementById('wins')
const spanLoses = document.getElementById('loses')
const spanTies = document.getElementById('ties')

rockBtn.addEventListener('click', function(){
    let computerMove = getComputerMove()
    let playMove = 'Rock'
    playerMove(playMove, computerMove)
    alert(`The computer move was ${computerMove}`)
})




paperBtn.addEventListener('click', function(){
    let computerMove = getComputerMove()
    let playMove = 'Paper'
    playerMove(playMove, computerMove)
    alert(`The computer move was ${computerMove}`)
})



scissorsBtn.addEventListener('click', function(){
    let computerMove = getComputerMove()
    let playMove = 'Scissors'
    playerMove(playMove, computerMove)
    alert(`The computer move was ${computerMove}.`)



})
resetBtn.addEventListener("click", function(){
    spanLoses.textContent = 0
    spanTies.textContent = 0
    spanWins.textContent = 0
    totalScore.wins = 0
    totalScore.loses = 0
    totalScore.ties = 0
})




function getComputerMove(){
    let computerMove = ''
    const randomIndex = Math.floor(Math.random()*moves.length)
    computerMove +=moves[randomIndex]
    return computerMove

}
function playerMove(playerMove, computerMove){
    if(computerMove === playerMove){
        totalScore.ties +=1
        spanTies.textContent = totalScore.ties
    }else if((computerMove === "Rock" && playerMove === "Paper") ||
    (computerMove === "Paper" && playerMove === "Scissors") ||
    (computerMove === "Scissors" && playerMove === "Rock")){
        totalScore.wins +=1
        spanWins.textContent = totalScore.wins
    }else{
        totalScore.loses +=1
        spanLoses.textContent = totalScore.loses
    }

}






