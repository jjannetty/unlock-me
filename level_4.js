window.initLevel4 = () => {
  const lineStart = document.querySelector('.level-4-start');
  const lineEnd = document.querySelector('.level-4-end');
  const line = document.querySelector('.level-4-line-1');
  var path = [];

  lineStart.onmouseenter = () => {
    line.onmousemove = (event) => {
      console.log(`x: ${event.clientX}, y:${event.clientY}`);
    }
  }
}
