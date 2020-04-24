function setNextLevel(currentLevel, callback) {
  const nextLevel = currentLevel + 1;

  document.getElementsByTagName('body')[0].className = `level-${nextLevel}`;
  document.getElementById(`level-${currentLevel}`).remove();
  document.getElementById(`level-${nextLevel}`).style.display = 'block';

  if (typeof callBack == 'function') {
    callback();
  }
}
