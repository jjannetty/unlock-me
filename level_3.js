
function completeLevel() {
  setNextLevel(3, initLevel4());
}


window.initLevel3 = () => {
  const trigger = document.querySelector('.level-3-trigger');
  var timer;

  trigger.addEventListener("mousedown", () =>{
    timer = setTimeout(completeLevel, 4000);
  });

  trigger.addEventListener("mouseup", () =>{
    clearTimeout(timer);
  });

  trigger.addEventListener("mouseout", () =>{
    clearTimeout(timer);
  });
}
