function trackKeyStrokes() {
  const options = [38, 40, 37, 39];
  var solution = getSolution(options);
  var pressedKeys = [];

  addHtml(solution);

  document.addEventListener('keydown', event => {
    var levelTwo = document.getElementById('level-2');

    if (levelTwo == null) { return false }

    if (pressedKeys.length == solution.length) {
      pressedKeys.shift();
    }

    pressedKeys.push(event.keyCode);

    if (pressedKeysMatchSolution(pressedKeys, solution)) {
      setNextLevel(2, initLevel3())
    }
  });
}

function addHtml(solution) {
  const container = document.querySelector('.level-2-prompt');
  console.log(solution);


  for (var i = 0; i < solution.length; i++) {
    let wrapperElement = document.createElement('div');
    let innerElement = document.createElement('span');

    wrapperElement.className = 'level-2-symbol';
    innerElement.className = `angle symbol-${solution[i]}`;

    wrapperElement.appendChild(innerElement);

    container.appendChild(wrapperElement);
  }
}

function getSolution(options) {
  var solution = [];

  for (var i = 0; i < 6; i++) {
    let option = options[Math.floor(Math.random() * options.length)];

    solution.push(option);
  }

  return solution;
}

function pressedKeysMatchSolution(pressedKeys, solution) {
  if (pressedKeys.length < solution.length) {
    return false;
  }

  for (var i = 0; i < solution.length - 1; i++) {
    if (pressedKeys[i] !== solution[i]) return false;
  }

  return true;
}



window.initLevel2 = function() {
  console.log('level 2 started')
  trackKeyStrokes();
}
