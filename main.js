const keysPressed = [];
const secret = ['ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight'];
alert('Arrow left, down, up, and right. Go!');
function keyPressed(e) {
  keysPressed.push(e.key);
  keysPressed.splice(-secret.length - 1, keysPressed.length - secret.length);
  if (keysPressed.join(',') == secret.join(',')) {
    cornify_add();
  }
}

document.addEventListener('keyup', keyPressed);
