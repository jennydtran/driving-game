var car = document.querySelector('img');

// Rotate Down
function rotateDown(event) {
  if (event.code !== 'ArrowDown') {
    return;
  }
  car.className = 'car transition down';
}
window.addEventListener('keydown', rotateDown);

// Rotate Up
function rotateUp(event) {
  if (event.code !== 'ArrowUp') {
    return;
  }
  car.className = 'car transition up';
}
window.addEventListener('keydown', rotateUp);

// Rotate Left
function rotateLeft(event) {
  if (event.code !== 'ArrowLeft') {
    return;
  }
  car.className = 'car transition left';
}
window.addEventListener('keydown', rotateLeft);

// Rotate Right
function rotateRight(event) {
  if (event.code !== 'ArrowRight') {
    return;
  }
  car.className = 'car transition right';
}
window.addEventListener('keydown', rotateRight);
