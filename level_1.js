function reportWindowSize() {
  var trigger = document.querySelector('.level-1-trigger');
  if(trigger != null) {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var triggerX = trigger.offsetLeft;
    var triggerY = trigger.offsetTop;

    console.log(`Window x: ${windowWidth}, Window y: ${windowHeight}`);
    console.log(`Trigger x: ${triggerX}, Trigger y: ${triggerY}`);

    if( (windowHeight <= triggerY) && (windowWidth <= triggerX) ) {
      document.getElementsByTagName('body')[0].className = 'level-2';
      trigger.remove();
    }
  }
}

function windowResize() {
  window.onresize = reportWindowSize;
}

window.initLevel1 = function() {
  windowResize();
}
