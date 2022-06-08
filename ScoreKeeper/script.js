const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');
const playerOnebtn = document.querySelector('#playerOnebtn');
const playerTwobtn = document.querySelector('#playerTwobtn');
const resetButton = document.querySelector('#reset');
const maxScore = document.querySelector('#maxScore');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

playerOnebtn.addEventListener('click', function(){ 
  if (!isGameOver){
    p1Score += 1;
  if (p1Score === winningScore){
    isGameOver = true;
    playerOneScore.classList.add('has-text-success');
    playerTwoScore.classList.add('has-text-danger');
    playerOnebtn.disabled = true;
    playerTwobtn.disabled = true;
  }
  playerOneScore.innerText = p1Score;
  }
})

playerTwobtn.addEventListener('click', function(){ 
  if (!isGameOver){
    p2Score += 1;
  if (p2Score === winningScore ){
    isGameOver = true;
    playerOneScore.classList.add('has-text-danger');
    playerTwoScore.classList.add('has-text-success');
    playerOnebtn.disabled = true;
    playerTwobtn.disabled = true;
  }
  playerTwoScore.innerText = p2Score;
  }
})

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function reset(){ 
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  playerOneScore.innerText = 0;
  playerTwoScore.innerText = 0;
  playerOneScore.classList.remove('has-text-success', 'has-text-danger');
  playerTwoScore.classList.remove('has-text-success', 'has-text-danger'); 
  playerOnebtn.disabled = false;
  playerTwobtn.disabled = false ;
}