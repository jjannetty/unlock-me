function reportWindowSize(callback) {
  var levelOne = document.getElementById('level-1');

  if (levelOne == null) { return false }

  var trigger = document.querySelector('.level-1-trigger');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var triggerX = trigger.offsetLeft;
  var triggerY = trigger.offsetTop;

  if( (windowHeight <= triggerY) && (windowWidth <= triggerX) ) {
    document.getElementsByTagName('body')[0].className = 'level-2';
    levelOne.remove();
    callback();
  }

}

function windowResize(callback) {
  window.onresize = function(){
   reportWindowSize(callback);
  }
}

function setTriggerPosition() {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let trigger = document.querySelector('.level-1-trigger');

  trigger.style.top = [getRandomInt(windowHeight - 10), 'px'].join('');
  trigger.style.left = [getRandomInt(windowWidth - 10), 'px'].join('');
  trigger.style.display = 'block';
}

function getRandomInt(max) {
  let min = 500;
  let randomNumber = Math.random() * (max - min) + min;

  console.log(randomNumber);

  return Math.floor(randomNumber);
}

window.initLevel1 = function(callback) {
  setTriggerPosition();
  windowResize(callback);
}
