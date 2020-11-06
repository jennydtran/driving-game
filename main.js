var car = document.querySelector('img');

var carDirection = {};

function handleKeyDown(event) {
  if (event.code !== 'ArrowDown' && event.code !== 'ArrowUp' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight') {
    return;
  }

  if (event.code === 'ArrowDown') {
    car.className = 'car transition down';
    carDirection.keyDown = 'south';

  } else if (event.code === 'ArrowUp') {
    car.className = 'car transition up';
    carDirection.keyUp = 'north';

  } else if (event.code === 'ArrowLeft') {
    car.className = 'car transition left';
    carDirection.keyLeft = 'west';

  } else if (event.code === 'car transition right') {
    car.className = 'car transition right';
    carDirection.keyRight = 'east';
  }

}
window.addEventListener('keydown', handleKeyDown);
