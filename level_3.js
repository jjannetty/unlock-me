
function completeLevel() {
  setNextLevel(3);
}


window.initLevel3 = function() {
  const trigger = document.querySelector('.level-3-trigger');
  var timer;

  trigger.addEventListener("mousedown", function(){
    timer = setTimeout(completeLevel, 4000);
  });

  trigger.addEventListener("mouseup", function(){
    clearTimeout(timer);
  });

  trigger.addEventListener("mouseout", function(){
    clearTimeout(timer);
  });
}
