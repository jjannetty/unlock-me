function trackKeyStrokes() {
  const solution = [38, 40, 37, 39];
  var pressedKeys = [];

  document.addEventListener('keydown', event => {
    var levelTwo = document.getElementById('level-2');

    if (levelTwo == null) { return false }

    if (pressedKeys.length == solution.length) {
      pressedKeys.shift();
    }

    pressedKeys.push(event.keyCode);

    if (pressedKeysMatchSolution(pressedKeys, solution)) {
      document.getElementsByTagName('body')[0].className = 'level-3';
      levelTwo.remove();
    }

    console.log(`solution: ${solution}, keys pressed: ${pressedKeys}`);
  });
}

function pressedKeysMatchSolution(pressedKeys, solution) {
  if (pressedKeys.length < 4) {
    return false;
  }

  for (var i = 0; i < solution.length - 1; i++) {
    if (pressedKeys[i] !== solution[i]) return false;
  }

  return true;
}



window.initLevel2 = function() {
  document.getElementById('level-2').style.display = 'block';
  trackKeyStrokes();
}
