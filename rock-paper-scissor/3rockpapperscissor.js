let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losess:0,
    ties:0
  }

  function pickComputerMove(){
    const randomNumber= Math.random();
    let computerMove='';
    if(randomNumber>=0 && randomNumber<1/3){
      computerMove='rock';
    }else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove='paper';

    }else if(randomNumber>=2/3 && randomNumber<3/3){
      computerMove='scissors';
    }
    return computerMove;
  };
  let isAutoPlaying=false;
  let intervalid;

  function autoPlay(){
    if(!isAutoPlaying){
        intervalId=setInterval(function() {
            const playerMove=pickComputerMove();    
            playGame(playerMove);
        },1000);
        isAutoPlaying=true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
   
 }

 document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  }else if(event.key==='p'){
    playGame('paper');
  }else if(event.key==='s'){
    playGame('scissors')
  }
 });
   function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';
    if(playerMove==='rock'){
      if(computerMove=='rock'){
        result='Tie';
      }else if(computerMove=='paper'){
        result='You lose';
      }else if(computerMove=='scissors'){
        result='You win';
      }
    }else if(playerMove==='paper'){
      if(computerMove=='rock'){
        result='You win';
      }else if(computerMove=='paper'){
        result='Tie';
      }else if(computerMove=='scissors'){
        result='You lose';
      }
    }else if(playerMove==='scissors'){
      if(computerMove=='rock'){
        result='You lose';
      }else if(computerMove=='paper'){
        result='You win';
      }else if(computerMove=='scissors'){
        result='Tie';
      }
    };
    if(result=='You win'){
      score.wins += 1;
    }else if(result=='You lose'){
      score.losess += 1;
    }else if(result=='Tie'){
      score.ties += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML=result;
     
    document.querySelector('.js-moves')
    .innerHTML=`You
  <img src="${playerMove}.JPG"class="move-icon">
  <img src="${computerMove}.JPG"class="move-icon">
  Computer`;


  }

  function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML= `Wins:${score.wins}, Losess:${score.losess}, Ties:${score.ties}`;
  }
  function autoPlayButton(){
    const buttonElement=document.querySelector(
'.auto-play-button2');
if(buttonElement.innerText==='Auto Play'){
buttonElement.innerHTML='Stop';
// buttonElement.classList.add('is-subscribed');
}else {
buttonElement.innerHTML='Auto Play';
// buttonElement.classList.remove('is-subscribed');
}
}