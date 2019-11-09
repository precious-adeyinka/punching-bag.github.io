var el = document.querySelector('#app');
var punchBtn = document.querySelector('#punchBtn');
var bar = document.querySelector('#bar');

// Data
var health  = 100;
var ended   = false;
var half    = false;

function punch() {
  health -=10;
  bar.style.width = health + '%';
  let snd = new Audio('./sound/punch.wav');
  snd.play();

  if(health === 0){
    ended = true;
    alert('Game Over! Click Restart to play again');
    punchBtn.style.visibility = 'hidden';
    bag.classList.add('burst');
  }

  if(health <=50){
    half = true;
    bar.classList.add('bar');
  }
}

function restart(){
  health = 100;
  ended = false;
  half = false;
  punchBtn.style.visibility = 'visible';
  bag.classList.remove('burst');
  bar.classList.remove('bar');
  bar.style.width = health + '%';
}