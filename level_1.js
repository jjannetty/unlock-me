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

window.initLevel1 = function(callback) {
  windowResize(callback);
}
