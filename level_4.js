window.initLevel4 = () => {
  const lineStart = document.querySelector('.level-4-start');
  const lineEnd = document.querySelector('.level-4-end');
  const line = document.querySelector('.level-4-line-1');

  lineStart.onmouseover = () => {
    line.addEventListener('mousemove', handleMouseMove, true);
  }

  line.onmouseleave = () => {
    line.removeEventListener('mousemove', handleMouseMove, true);
    lineEnd.removeEventListener('mouseenter', handleEnd, true);
  }

  function handleEnd() {
    setNextLevel(4);
  }

  function handleMouseMove(e) {
    e = e || window.event;

    console.log(`x: ${e.clientX}, y: ${e.clientY}`);

    lineEnd.addEventListener('mouseenter', handleEnd, true);
  }
}
  