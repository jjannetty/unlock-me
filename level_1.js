function reportWindowSize() {
  var levelOne = document.getElementById('level-1');

  if (levelOne == null) { return false }

  var trigger = document.querySelector('.level-1-trigger');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var triggerX = trigger.offsetLeft;
  var triggerY = trigger.offsetTop;

  if( (windowHeight <= triggerY) && (windowWidth <= triggerX) ) {
    setNextLevel(1, initLevel2());
  }

}

function windowResize() {
  window.onresize = function(){
   reportWindowSize();
  }
}

function setTriggerPosition() {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let trigger = document.querySelector('.level-1-trigger');

  trigger.style.top = [getRandomInt( 400, windowHeight - 10), 'px'].join('');
  trigger.style.left = [getRandomInt(900, windowWidth - 10), 'px'].join('');
  trigger.style.display = 'block';
}

function getRandomInt(min, max) {
  let randomNumber = Math.random() * (max - min) + min;

  return Math.floor(randomNumber);
}

window.initLevel1 = function() {
  setTriggerPosition();
  windowResize();
}
